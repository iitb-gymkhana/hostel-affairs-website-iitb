import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HaCouncilComponent } from './ha-council/ha-council.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'council', component: HaCouncilComponent},
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
