import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './AdminComponent/admin-dashboard/admin-dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { OrganizerDashboardComponent } from './organizer-dashboard/organizer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    NavBarComponent,
    ListEventsComponent,
    AddEventComponent,
    ListBookingComponent,
    ListPaymentsComponent,
    MakePaymentComponent,
    AdminListComponent,
    CreateBookingComponent,
    OrganizerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
