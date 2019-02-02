const connection = require('./db_mongo')
const mongo = require('mongodb')
const models = require('./models')
require('dotenv').config();
const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const FoodOutlet = models.FoodOutlet
const FoodOutletMenu = models.FoodOutletMenu
const FoodOutletRating = models.FoodOutletRating
const User = models.User
const ObjectId = mongo.ObjectID
const SECRET_KEY = process.env.SECRET_KEY

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
})) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// localhost:3003
app.listen(3009, () => {
  console.log("Server is up and listening on 3009...")
})

const base_url = "/ha_website/api"

//middlewares
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      'error': 'Unauthorized request'
    })
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).json({
      'error': 'Unauthorized request'
    })
  }
  let payload
  try {
    payload = jwt.verify(token, SECRET_KEY)
  } catch (err) {
    console.log(`\n Unauthorized request: ${err.message} \n`)
    return res.status(401).json({
      'error': `Unauthorized request: ${err.message}`
    })
  }
  req.userId = payload.subject
  next()
}

//user apis
app.get(base_url + '/users/', (req, res) => {
  let query = {}
  User.find(query, {
    'password': 0
  }, (err, data) => {
    if (err) {
      console.log(`\n Failed to query users: ${err} \n`)
      res.status(500).json({
        "error": `Failed to query users: ${err}`
      })
      return
    }
    res.status(200).json(data)
  })
})

app.get(base_url + '/users/:id', (req, res) => {
  let query = req.params.id
  User.findById(query, {
    'password': 0
  }, (err, data) => {
    if (err) {
      console.log(`\n Failed to query user ${err} \n`)
      res.status(500).json({
        "error": `Failed to query user ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n user with the id: ${query} does not exists \n`)
      res.status(404).json({
        "error": `user with the id: ${query} does not exists`
      })
      return
    }
    res.status(200).json(data)
  })
})

app.post(base_url + '/users', (req, res) => {
  let query = req.body
  User.create(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to create user: ${err} \n`)
      res.status(500).json({
        "error": `Failed to create user: ${err}`
      })
      return
    }
    res.status(201).json({
      "result": "user is saved successfully",
      "menu_url": `${base_url}/users/${data['_id']}`
    })
  })
})

app.post(base_url + '/users/login', (req, res) => {
  let query = req.body
  User.findOne({
    'user_id': query['user_id']
  }, (err, data) => {
    if (err) {
      console.log(`\n Failed to query user: ${err} \n`)
      res.status(500).json({
        "error": `Failed to query user: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n user with the user_id: ${query['user_id']} does not exists \n`)
      res.status(404).json({
        "error": `user with the user_id: ${query['user_id']} does not exists`
      })
      return
    }

    data.comparePassword(query['password'], function (err, isMatch) {
      if (err) {
        console.log(`\n Failed: ${err} \n`)
        res.status(500).json({
          "error": `Failedr: ${err}`
        })
        return
      }
      if (isMatch) {
        let payload = {
          subject: data['_id']
        }
        let token = jwt.sign(payload, SECRET_KEY)
        res.status(200).json({
          '_id': data['_id'],
          'user_id': data['user_id'],
          'result': 'login successful',
          'token': token
        })
        return
      }
      if (!isMatch) {
        res.status(401).json({
          "error": "unauthorized: wrong password"
        })
      }
    });
  })
})

// menu apis
app.get(base_url + '/outlet_menus/:id', (req, res) => {
  let query
  try {
    query = new ObjectId(req.params.id)
  } catch (err) {
    console.log(`\n error in parsing menu_id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing menu_id: ${err.message}`
    })
    return
  }
  FoodOutletMenu.findById(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to query menu ${err} \n`)
      res.status(500).json({
        "error": `Failed to query menu ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n menu with the id: ${query} does not exists \n`)
      res.status(404).json({
        "error": `menu with the id: ${query} does not exists`
      })
      return
    }
    res.status(200).json(data)
  })
})

app.get(base_url + '/outlets/:id/menu', (req, res) => {
  let query
  try {
    query = new ObjectId(req.params.id)
  } catch (err) {
    console.log(`\n error in parsing outlet_id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing outlet_id: ${err.message}`
    })
    return
  }
  FoodOutlet.findById(query, {
    'menu_id': 1
  }, (err, data) => {
    if (err) {
      console.log(`\n error in mongo: ${err} \n`)
      res.status(500).json({
        "error": `error in mongo: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n no outlet found with the id: ${query} \n`)
      res.status(400).json({
        "error": `no outlet found with the id: ${query}`
      })
      return
    }
    FoodOutletMenu.findById(data['menu_id'], (err, data) => {
      if (err) {
        console.log(`Failed to query menu: ${err}`)
        res.status(500).json({
          "error": `Failed to query menu: ${err}`
        })
        return
      }
      res.status(200).json(data)
    })
  })
})

app.get(base_url + '/outlet_menus', (req, res) => {
  let query = {}
  FoodOutletMenu.find(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to query menus: ${err} \n`)
      res.status(500).json({
        "error": `Failed to query menus: ${err}`
      })
      return
    }
    res.status(200).json(data)
  })
})


app.post(base_url + '/outlet_menus', verifyToken, (req, res) => {
  let query = req.body
  FoodOutletMenu.create(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to insert menus: ${err} \n`)
      res.status(500).json({
        "error": `Failed to insert menus: ${err}`
      })
      return
    }
    res.status(201).json({
      "result": "menu is saved successfully",
      "menu_url": `${base_url}/outlet_menus/${data['_id']}`
    })
  })
})

app.put(base_url + '/outlet_menus/', verifyToken, (req, res) => {
  let query = req.body
  query['display_name'] = query['name']
  FoodOutletMenu.findByIdAndUpdate(query['_id'], query, {
    new: true
  }, (err, data) => {
    if (err) {
      console.log(`\n Failed to edit menu: ${err} \n`)
      res.status(500).json({
        "error": `Failed to edit menu: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n Failed to find menu with id: ${query['_id']}\n`)
      res.status(400).json({
        "error": `Failed to find menu with id: ${query['_id']}`
      })
      return
    }
    res.status(200).json({
      "result": "menu is edited successfully",
      "menu_url": `${base_url}/outlet_menus/${data['_id']}`
    })
  })
})

app.delete(base_url + '/outlet_menus/:id', verifyToken, (req, res) => {
  let query = req.params.id
  FoodOutletMenu.findByIdAndRemove(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to delete menu: ${err} \n`)
      res.status(500).json({
        "error": `Failed to delete menu: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n Failed to find menu with id: ${query}\n`)
      res.status(400).json({
        "error": `Failed to find menu with id: ${query}`
      })
      return
    }
    res.status(200).json({
      "result": "menu is deleted successfully"
    })
  })
})

async function getLastVistRating(food_outlet_id) {


  return ratings[0];
}

// outlet apis
app.get(base_url + '/outlets', async (req, res) => {
  let query = {}
  FoodOutlet.find(query).lean().exec(async (err, data) => {
    if (err) {
      console.log(`Failed to query outlets from food_oulets collection: ${err}`)
      res.status(500).json({
        "error": `Failed to query outlets from food_oulets collection: ${err}`
      })
      return
    }

    for (let i = 0; i < data.length; i++) {
      const ratings = await FoodOutletRating.find({
          'food_outlet_id': data[i]._id
        })
        .sort({
          visit_date: -1
        })
        .lean()

      data[i].last_visit = ratings[0];
    }
    
    res.status(200).json(data);

  })
})

app.get(base_url + '/outlets/:id', (req, res) => {
  let query
  try {
    query = new ObjectId(req.params.id)
  } catch (err) {
    console.log(`\n error in parsing outlet_id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing outlet_id: ${err.message}`
    })
    return
  }
  FoodOutlet.findById(query, (err, data) => {
    if (err) {
      console.log("Failed to query outlets from food_oulets collection" + err)
      res.sendStatus(500)
      res.json({
        "status": 500,
        "error": err
      })
      return
    }
    if (!data) {
      console.log(`\n outlet with the id: ${query} does not exists \n`)
      res.status(404).json({
        "error": `outlet with the id: ${query} does not exists`
      })
      return
    }
    res.status(200).json(data)
  })
})

app.post(base_url + '/outlets', verifyToken, (req, res) => {
  let query = req.body
  try {
    query['menu_id'] = new ObjectId(query['menu_id'])
  } catch (err) {
    console.log(`\n error in parsing menu_id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing menu_id: ${err.message}`
    })
    return
  }
  FoodOutletMenu.find({
    '_id': query['menu_id']
  }, {
    '_id': 1
  }, (err, data) => {
    if (err) {
      console.log(`\n error in mongo: ${err} \n`)
      res.status(500).json({
        "error": `error in mongo: ${err}`
      })
      return
    }
    if (data.length === 0) {
      console.log(`\n no menu found with the id: ${query['menu_id']} \n`)
      res.status(400).json({
        "error": `no menu found with the id: ${query['menu_id']}`
      })
      return
    }
    FoodOutlet.create(query, (err, data) => {
      if (err) {
        console.log(`\n Failed to insert documents: ${err} \n`)
        res.status(500).json({
          "error": `Failed to insert documents: ${err}`
        })
        return
      }
      res.status(201).json({
        "result": "outlet is saved successfully",
        "outlet_url": `${base_url}/outlets/${data['_id']}`
      })
    })
  })
})

app.put(base_url + '/outlets/', verifyToken, (req, res) => {
  let query = req.body
  query['display_name'] = query['name']
  FoodOutlet.findByIdAndUpdate(query['_id'], query, {
    new: true
  }, (err, data) => {
    if (err) {
      console.log(`\n Failed to edit outlet: ${err} \n`)
      res.status(500).json({
        "error": `Failed to edit outlet: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n Failed to find outlet with id: ${query['_id']}\n`)
      res.status(400).json({
        "error": `Failed to find outlet with id: ${query['_id']}`
      })
      return
    }
    res.status(200).json({
      "result": "outlet is edited successfully",
      "menu_url": `${base_url}/outlets/${data['_id']}`
    })
  })
})

app.delete(base_url + '/outlets/:id', verifyToken, (req, res) => {
  let query = req.params.id
  console.log(query)
  FoodOutlet.findByIdAndRemove(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to delete outlet: ${err} \n`)
      res.status(500).json({
        "error": `Failed to delete outlet: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n Failed to find outlet with id: ${query}\n`)
      res.status(400).json({
        "error": `Failed to find outlet with id: ${query}`
      })
      return
    }
    res.status(200).json({
      "result": "outlet is deleted successfully"
    })
  })
})

// rating apis
app.get(base_url + '/outlets/:id/ratings', (req, res) => {
  let query
  try {
    query = {
      '_id': new ObjectId(req.params.id)
    }
  } catch (err) {
    console.log(`\n error in parsing outlet id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing outlet id: ${err.message}`
    })
    return
  }
  FoodOutlet.find(query, (err, data) => {
    if (err) {
      console.log(`\n error in mongo: ${err} \n`)
      res.status(500).json({
        "error": `error in mongo: ${err}`
      })
      return
    }
    if (data.length === 0) {
      console.log(`\n no outlet found with the id: ${query['_id']} \n`)
      res.status(400).json({
        "error": `no outlet found with the name: ${query['_id']}`
      })
      return
    }
    FoodOutletRating.find({
      'food_outlet_id': query['_id']
    }, (err, data) => {
      if (err) {
        console.log(`Failed to query ratings: ${err}`)
        res.status(500).json({
          "error": `Failed to query ratings: ${err}`
        })
        return
      }
      res.status(200).json(data.slice(Math.max(data.length - 6, 0))) // gives latest 6 ratings
    })
  })
})

app.get(base_url + '/ratings', (req, res) => {
  let query = {}
  FoodOutletRating.find(query, (err, data) => {
    if (err) {
      console.log(`Failed to query ratings: ${err}`)
      res.status(500).json({
        "error": `Failed to query ratings: ${err}`
      })
      return
    }
    res.status(200).json(data)
  })
})

app.get(base_url + '/ratings/:id', (req, res) => {
  let query
  try {
    query = new ObjectId(req.params.id)
  } catch (err) {
    console.log(`\n error in parsing rating_id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing rating_id: ${err.message}`
    })
    return
  }
  FoodOutletRating.findById(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to query the rating: ${err} \n`)
      res.status(500).json({
        "error": `Failed to query the rating: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n rating with the id: ${query} does not exists \n`)
      res.status(404).json({
        "error": `rating with the id: ${query} does not exists`
      })
      return
    }
    res.status(200).json(data)
  })
})

app.post(base_url + '/ratings', verifyToken, (req, res) => {
  let query = req.body
  try {
    query['food_outlet_id'] = new ObjectId(query['food_outlet_id'])
  } catch (err) {
    console.log(`\n error in parsing food_outlet_id: ${err.message} \n`)
    res.status(400).json({
      "error": `error in parsing food_outlet_id: ${err.message}`
    })
    return
  }
  try {
    query['visit_date'] = new Date(query['visit_date'])
    console.log(query)
  } catch (err) {
    console.log(`\n error in parsing visit_date: ${err.message}\n`)
    res.status(400).json({
      "error": `error in parsing visit_date: ${err.message}`
    })
    return
  }
  FoodOutlet.find({
    '_id': query['food_outlet_id']
  }, (err, data) => {
    if (err) {
      console.log(`\n error in mongo: ${err}\n`)
      res.sendStatus(500)
      res.json({
        "status": 500,
        "error": err
      })
      return
    }
    if (data.length === 0) {
      console.log(`\n no outlet found with id: ${query['food_outlet_id']} found \n`)
      res.status(400).json({
        "error": `no outlet found with id: ${query['food_outlet_id']} found`
      })
      return
    }
    query['display_name'] = `${query['visit_date'].toISOString().split('T')[0]} ${data[0].name}`

    FoodOutletRating.create(query, (err, data) => {
      if (err) {
        console.log(`Failed to save the rating: ${err}`)
        res.status(500).json({
          "error": `Failed to save the rating: ${err}`
        })
        return
      }
      res.status(201).json({
        "result": "rating is saved successfully",
        "rating_url": `${base_url}/ratings/${data['_id']}`
      })
    })
  })
})

app.put(base_url + '/ratings/', verifyToken, (req, res) => {
  let query = req.body
  try {
    query['visit_date'] = new Date(query['visit_date'])
  } catch (err) {
    console.log(`\n error in parsing visit_date: ${err.message}\n`)
    res.status(400).json({
      "error": `error in parsing visit_date: ${err.message}`
    })
    return
  }
  FoodOutlet.find({
    '_id': query['food_outlet_id']
  }, (err, data) => {
    if (err) {
      console.log(`\n error in mongo: ${err}\n`)
      res.send(500).json({
        "error": `\n error in mongo: ${err}\n`
      })
      return
    }
    if (data.length === 0) {
      console.log(`\n no outlet found with id: ${query['food_outlet_id']} found \n`)
      res.status(400).json({
        "error": `no outlet found with id: ${query['food_outlet_id']} found`
      })
      return
    }
    query['display_name'] = `${query['visit_date'].toISOString().split('T')[0]} ${data[0].name}`

    FoodOutletRating.findByIdAndUpdate(query['_id'], query, {
      new: true
    }, (err, data) => {
      if (err) {
        console.log(`\n Failed to edit rating: ${err} \n`)
        res.status(500).json({
          "error": `Failed to edit rating: ${err}`
        })
        return
      }
      if (!data) {
        console.log(`\n Failed to find rating with id: ${query['_id']}\n`)
        res.status(400).json({
          "error": `Failed to find rating with id: ${query['_id']}`
        })
        return
      }
      console.log(`lsgonslgdklgmslk ${data}`)
      res.status(200).json({
        "result": "rating is edited successfully",
        "menu_url": `${base_url}/ratings/${data['_id']}`
      })
    })
  })
})

app.delete(base_url + '/ratings/:id', verifyToken, (req, res) => {
  let query = req.params.id
  FoodOutletRating.findByIdAndRemove(query, (err, data) => {
    if (err) {
      console.log(`\n Failed to delete rating: ${err} \n`)
      res.status(500).json({
        "error": `Failed to delete rating: ${err}`
      })
      return
    }
    if (!data) {
      console.log(`\n Failed to find rating with id: ${query}\n`)
      res.status(400).json({
        "error": `Failed to find rating with id: ${query}`
      })
      return
    }
    res.status(200).json({
      "result": "outlet is deleted successfully"
    })
  })
})
