import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HaCouncilComponent } from './ha-council/ha-council.component';
import { AlumniAffairsComponent } from './alumni-affairs/alumni-affairs.component';
import { IrComponent } from './ir/ir.component';
import { HostelsComponent } from './hostels/hostels.component';
import { HostelDeliveryComponent } from './hostel-delivery/hostel-delivery.component';
import { TendersComponent } from './tenders/tenders.component';
import { HallManagerDutiesComponent } from './hall-manager-duties/hall-manager-duties.component';
import { HospitalComponent } from './hospital/hospital.component';
import { SustainabilityCellComponent } from './sustainability-cell/sustainability-cell.component';
import { GuestAccomodationComponent } from './guest-accomodation/guest-accomodation.component';
import { HygieneCommitteeComponent } from './hygiene-committee/hygiene-committee.component';
import { FoodOutletsComponent } from './food-outlets/food-outlets.component';
import { SecurityGuidelinesComponent } from './security-guidelines/security-guidelines.component';
import { AuthGuard } from './_guards/auth.guard'

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
    path: 'adminPage',
    canActivate: [AuthGuard],
    component: AdminComponent,
    data: {
      title: 'Admin',
      metatags: {
        description: 'admin portal for Hostel Affairs',
        keywords: 'hostel affairs, iitb, adminpage'
      }
    }
  },
  {
    path: 'admin',
    component: AdminLoginComponent,
    data: {
      title: 'Admin Login',
      metatags: {
        description: 'admin portal for Hostel Affairs',
        keywords: 'hostel affairs, iitb, adminpage'
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
    path: 'guestaccomodation',
    component: GuestAccomodationComponent,
    data: {
      title: 'Guest Accomodation',
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
        description: 'IITB Hospital',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'security',
    component: SecurityGuidelinesComponent,
    data: {
      title: 'Security Guidelines',
      metatags: {
        description: 'Security guidelines',
        keywords: 'hostel affairs, iitb'
      }
    }
  },
  {
    path: 'sustainabilitycell',
    component: SustainabilityCellComponent,
    data: {
      title: 'Sustainability Cell',
      metatags: {
        description: 'Sustainability Cell brings regards from a sustainable future waiting ahead',
        keywords: 'sustainability cell, hostel affairs, iitb'
      }
    }
  },
  {
    path: 'hygienecommittee',
    component: HygieneCommitteeComponent,
    data: {
      title: 'Hygiene Committee',
      metatags: {
        description: '',
        keywords: 'hygiene committee, hostel affairs, iitb'
      }
    }
  },
  {
    path: 'foodoutlets',
    component: FoodOutletsComponent,
    data: {
      title: 'Food Outlet Ratings',
      metatags: {
        description: '',
        keywords: 'food outlets, hostel affairs, iitb'
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
