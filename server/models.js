const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

FoodOutletSchema = new Schema({
    "name": { type: String, index: true, unique: true, required: true },
    "description": String,
    "menu_id": { type: mongoose.Types.ObjectId, required: true },
    "display_name": { type: String }
})

FoodOutletSchema.pre('save', function (next) {
    this.display_name = this.get('name');
    next();
});

FoodOutletMenuSchema = new Schema({
    "name": { type: String, index: true, unique: true, required: true },
    "menu": { type: Schema.Types.Mixed, required: true },
    "display_name": { type: String }
})

FoodOutletMenuSchema.pre('save', function (next) {
    this.display_name = this.get('name');
    next();
});

FoodOutletRatingSchema = new Schema({
    "visit_date": { type: Date, index: true, required: true },
    "food_outlet_id": { type: mongoose.Types.ObjectId, required: true },
    "food_rating": { type: Number, min: 0, max: 5 },
    "operational_rating": { type: Number, min: 0, max: 5 },
    "total_rating": { type: Number, min: 0, max: 5 },
    "display_name": { type: String }
})

UserSchema = new Schema({
    "user_id": { type: String, unique: true, required: true },
    "password": { type: String, required: true }
})

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, call_back) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        call_back(null, isMatch);
    });
};


exports.FoodOutlet = mongoose.model('FoodOutlet', FoodOutletSchema)
exports.FoodOutletMenu = mongoose.model('FoodOutletMenu', FoodOutletMenuSchema)
exports.FoodOutletRating = mongoose.model('FoodOutletRating', FoodOutletRatingSchema)
exports.User = mongoose.model('User', UserSchema)