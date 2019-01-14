import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { VideoService } from '../../services/video.service';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  video: any;
  editForm: FormGroup;
  customers: any;
  rating = []
  statuses=[{id:1,st:'Available'},{id:2,st:'Unavailable'}]

  constructor(private customerService: CustomerService, private videoService: VideoService, 
    private route: ActivatedRoute, private router: Router, private fBuilder: FormBuilder) {
      this.createForm()
     }

    createForm() {
      this.editForm = this.fBuilder.group({
        title: [''],
        runTime: [''],
        genre: [''],
        rating: [''],
        director: [''],
        status: [''],
     });
    }
    
    check(status){
      console.log(status);
    }

    getCustomers(){
      this.customerService.getCustomers().subscribe(res =>{
        this.customers = res;
      })
    }
    
    createRating(){
      for (var i = 0; i < 5; i++) {
        this.rating.push(i + " stars");
      }
      return this.rating;
    }

    updateVideo(title, runTime, genre, rating, director,status) {
     
      this.route.params.subscribe(params => {
      this.videoService.updateVideo(title, runTime, genre, rating, director,status, params['id']);
      //console.log(title, runTime, genre, rating, director,status, params['id']);
      this.router.navigate(['videos']);
    });
  }
    ngOnInit() {
      this.getCustomers();
      this.createRating();
      this.route.params.subscribe(params => {
        this.video = this.videoService.editVideo(params['id']).subscribe(res => {
          this.video = res;
        });
      });
    }

}
