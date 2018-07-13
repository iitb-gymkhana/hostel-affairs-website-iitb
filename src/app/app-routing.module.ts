import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HaCouncilComponent } from './ha-council/ha-council.component';
import { AlumniAffairsComponent } from './alumni-affairs/alumni-affairs.component';
import { IrComponent } from './ir/ir.component';
import { HostelsComponent } from './hostels/hostels.component';
import { HostelDeliveryComponent } from './hostel-delivery/hostel-delivery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'council', component: HaCouncilComponent},
  { path: 'alumni', component: AlumniAffairsComponent },
  { path: 'ir', component: IrComponent },
  { path: 'hostels', component: HostelsComponent },
  { path: 'delivery', component: HostelDeliveryComponent },
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
