import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { HaCouncilComponent } from './ha-council/ha-council.component';
import { HaCouncilCardComponent } from './ha-council/ha-council-card/ha-council-card.component';
import { AlumniAffairsComponent } from './alumni-affairs/alumni-affairs.component';
import { IrComponent } from './ir/ir.component';
import { HostelsComponent } from './hostels/hostels.component';
import { HostelCardComponent } from './hostels/hostel-card/hostel-card.component';
import { HostelDeliveryComponent } from './hostel-delivery/hostel-delivery.component';
import { TendersComponent } from './tenders/tenders.component';
import { FooterComponent } from './footer/footer.component';
import { HallManagerDutiesComponent } from './hall-manager-duties/hall-manager-duties.component';
import { HospitalComponent } from './hospital/hospital.component';
import { SustainabilityCellComponent } from './sustainability-cell/sustainability-cell.component';
import { GuestAccomodationComponent } from './guest-accomodation/guest-accomodation.component';
import { HygieneCommitteeFoodOutletsComponent } from './hygiene-committee-food-outlets/hygiene-committee-food-outlets.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    HaCouncilComponent,
    HaCouncilCardComponent,
    AlumniAffairsComponent,
    IrComponent,
    HostelsComponent,
    HostelCardComponent,
    HostelDeliveryComponent,
    TendersComponent,
    FooterComponent,
    HallManagerDutiesComponent,
    HospitalComponent,
    SustainabilityCellComponent,
    GuestAccomodationComponent,
    HygieneCommitteeFoodOutletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
