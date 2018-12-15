import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service'
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any

  constructor(private customerService: CustomerService, private router: Router, public auth: AuthService ) { }

  ngOnInit() {
    this.getCustomer()
  }

  getCustomer(){
    this.customerService.getCustomers().subscribe(res =>{
      console.log(res)
      this.customers = res

    })
  }

}
