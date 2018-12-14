import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  result:any;
  constructor(private http: HttpClient) { }
  getCustomers(){
    const uri = 'http://localhost:3000/customers';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  reserveVideo(id) {
    const uri = 'http://localhost:3000/videos/join/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
}