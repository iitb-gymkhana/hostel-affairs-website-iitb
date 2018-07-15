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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'council', component: HaCouncilComponent},
  { path: 'alumni', component: AlumniAffairsComponent },
  { path: 'ir', component: IrComponent },
  { path: 'hostels', component: HostelsComponent },
  { path: 'delivery', component: HostelDeliveryComponent },
  { path: 'tenders', component: TendersComponent },
  { path: 'hallmanagerduties', component: HallManagerDutiesComponent },
  { path: '**', redirectTo: 'home' }
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
