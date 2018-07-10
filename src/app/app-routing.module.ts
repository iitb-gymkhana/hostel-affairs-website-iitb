import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HaCouncilComponent } from './ha-council/ha-council.component';
import { AlumniAffairsComponent } from './alumni-affairs/alumni-affairs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'council', component: HaCouncilComponent},
  { path: 'alumni', component: AlumniAffairsComponent },
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
