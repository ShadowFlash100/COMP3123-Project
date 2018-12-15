import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { VideoService } from '../../services/video.service';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
video: any;
customers: any;
reserveForm: FormGroup;

  constructor(private customerService: CustomerService, private videoService: VideoService, 
    private route: ActivatedRoute, private router: Router, private fBuilder: FormBuilder) {
      this.createForm();
     }
     
  createForm() {
    this.reserveForm = this.fBuilder.group({
      title: [''],
      runTime: [''],
      genre: [''],
      rating: [''],
      director: [''],
      status: [''],
      customer:['']
   });
  }
  
  getCustomers(){
    this.customerService.getCustomers().subscribe(res =>{
      this.customers = res;
    })
  }
  reserveVideo(title, runTime, genre, rating, director,status) {
   
    status='Unavailable';
    this.route.params.subscribe(params => {
    this.videoService.reserveVideo(title, runTime, genre, rating, director,status, params['id']);
    //console.log(title, runTime, genre, rating, director,status, params['id']);
    this.router.navigate(['videos']);
  });
}
  ngOnInit() {
    this.getCustomers();
    this.route.params.subscribe(params => {
      this.video = this.videoService.reserve(params['id']).subscribe(res => {
        this.video = res;
      });
    });
  }

}
