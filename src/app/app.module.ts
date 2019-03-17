import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { HygieneCommitteeComponent } from './hygiene-committee/hygiene-committee.component';
import { FoodOutletsComponent } from './food-outlets/food-outlets.component';
import { SecurityGuidelinesComponent } from './security-guidelines/security-guidelines.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AuthGuard } from './_guards/auth.guard'
import { ApiService } from './_services/api.service';
import { StarRatingModule } from 'angular-star-rating';
import { EshuttleComponent } from './eshuttle/eshuttle.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgProgressModule } from '@ngx-progressbar/core';
import { GulmoharDashboardComponent } from './admin/gulmohar-dashboard/gulmohar-dashboard.component';

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
    HygieneCommitteeComponent,
    FoodOutletsComponent,
    SecurityGuidelinesComponent,
    AdminComponent,
    AdminLoginComponent,
    EshuttleComponent,
    GulmoharDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    NgProgressModule
  ],
  providers: [
    Title,
    AuthGuard,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
