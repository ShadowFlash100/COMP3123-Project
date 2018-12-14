import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ListComponent } from './components/list/list.component';

import { VideoComponent } from './components/video/video.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

//services
import { CustomerService } from './services/customer.service';
import { VideoService } from './services/video.service';
import {AuthService} from "./services/auth.service";
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    VideoComponent,
    CustomersComponent,
    ReserveComponent,
    VideoEditComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [VideoService, AuthService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
