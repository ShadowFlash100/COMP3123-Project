import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import { VideoComponent } from './components/video/video.component';
import { CustomersComponent } from './components/customers/customers.component';


//services
import { CustomerService } from './services/customer.service';
import { VideoService } from './services/video.service';
import {AuthService} from "./services/auth.service";
import { FilterPipe } from './filter/filter.pipe';
import { ReserveComponent } from './components/reserve/reserve.component';

const routes: Routes = [
  //{path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', redirectTo: 'videos', pathMatch: 'full'},
  {path: 'videos', component: VideoComponent},
  {path: 'home', component:HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'customers', component: CustomersComponent},
  {path:'reserve/:id', component: ReserveComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    //ListComponent,
    //CreateComponent,
    EditComponent,
    HomeComponent,
    AdminComponent,
    VideoComponent,
    CustomersComponent,
    ReserveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [VideoService, AuthService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
