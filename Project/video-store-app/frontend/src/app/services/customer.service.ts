import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get(`${this.uri}/customers`)
  }
  getCustomerById(id){
    return this.http.get(`${this.uri}/customers/${id}`)
  }
  addCustomer(firstName, lastName, address, city, phone,  status, video) {
    const customer = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      phone: phone,
      status: status,
      video: video
    };
    return this.http.post(`${this.uri}/customers/add`, customer);
  }

  updateCustomer(id, firstName, lastName, address, city, phone,  status, video) {
    const customer = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      phone: phone,
      status: status,
      video: video
    };
    return this.http.post(`${this.uri}/customers/update/${id}`, customer);
  }
  deleteCustomer(id) {
    return this.http.get(`${this.uri}/customers/delete/${id}`);
  } 
}
