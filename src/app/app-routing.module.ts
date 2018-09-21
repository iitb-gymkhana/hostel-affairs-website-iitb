import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HaCouncilComponent } from './ha-council/ha-council.component';
import { AlumniAffairsComponent } from './alumni-affairs/alumni-affairs.component';
import { IrComponent } from './ir/ir.component';
import { HostelsComponent } from './hostels/hostels.component';
import { HostelDeliveryComponent } from './hostel-delivery/hostel-delivery.component';
import { TendersComponent } from './tenders/tenders.component';
import { HallManagerDutiesComponent } from './hall-manager-duties/hall-manager-duties.component';
import { HospitalComponent } from './hospital/hospital.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      metatags: {
        description: 'A place to get all the info about hostel life at IIT Bombay',
        keywords: 'hostel affairs, iitb, homepage'
      }
    }
  },
  {
    path: 'council',
    component: HaCouncilComponent,
    data: {
      title: 'HA Council',
      metatags: {
        description: 'Council members of Hostel Affairs',
        keywords: 'hostel affairs, iitb, homepage, council'
      }
    }
  },
  {
    path: 'alumni',
    component: AlumniAffairsComponent,
    data: {
      title: 'Alumni Affairs',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'ir',
    component: IrComponent,
    data: {
      title: 'International Relations',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'hostels',
    component: HostelsComponent,
    data: {
      title: 'Hostels',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'delivery',
    component: HostelDeliveryComponent,
    data: {
      title: 'Hostel Delivery',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'tenders',
    component: TendersComponent,
    data: {
      title: 'Tenders',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'hallmanagerduties',
    component: HallManagerDutiesComponent,
    data: {
      title: 'Hall Manager Duties',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'hospital',
    component: HospitalComponent,
    data: {
      title: 'Hospital',
      metatags: {
        description: '',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: '**',
    redirectTo: 'home',
    data: {
      title: 'Home',
      metatags: {
        description: 'A place to get all the info about hostel life at IIT Bombay',
        keywords: 'hostel affairs, iitb, homepage'
      }
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
