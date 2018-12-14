import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./services/auth.guard";
import { VideoComponent } from './components/video/video.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: "", component: VideoComponent},
  { path: "addVideo", component: VideoEditComponent},
  { path: "videoList", component: VideoComponent},
  { path: "customerList", component: CustomersComponent},
  { path: "reserve/:videoId", component: ReserveComponent},
  { path: "editCustomer/:customerId", component: CustomerEditComponent},
  { path: "editVideo/:videoId", component: VideoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
