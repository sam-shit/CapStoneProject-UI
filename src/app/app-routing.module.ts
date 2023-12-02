import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './AdminComponent/admin-dashboard/admin-dashboard.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { OrganizerDashoardComponent } from './OrganizerComponant/organizer-dashoard/organizer-dashoard.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { ViewPaymentListComponent } from './view-payment-list/view-payment-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
const routes: Routes = [
  {path : 'AdminDashboard', component : AdminDashboardComponent},
  {path : 'ListEvents', component : ListEventsComponent},
  {path : 'AddEvent', component : AddEventComponent},
  {path : 'ListBooking', component : ListBookingComponent},
  {path : 'ListPayment', component : ListPaymentsComponent},
  {path:'OrganizerDashBoard',component:OrganizerDashoardComponent},
  {path:'ViewEvent',component:ViewEventComponent},
  {path:'viewpayment',component:ViewPaymentListComponent},
 { path:'BookingList',component:BookingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
