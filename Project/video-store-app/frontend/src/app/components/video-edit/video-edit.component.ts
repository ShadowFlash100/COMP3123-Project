import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import { VideoService } from 'src/app/services/video.service';
import { CustomerService } from 'src/app/services/customer.service';

import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  video: any;
  videoId:string;
  form:FormGroup;
  customers: any;
  currentCustomer:string;
  currentCustomerId:string;
  userIsAuthenticated = false;
  mode


  constructor(private videoService: VideoService, private router: Router, public auth: AuthService, private customerService: CustomerService, public route:ActivatedRoute ) { }

  ngOnInit() {

    this.customerService.getCustomers().subscribe(res =>{
      console.log(res)
      this.customers = res;
    });
    this.userIsAuthenticated = this.auth.isAuthenticated();
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null),
      runTime: new FormControl(null),
      genre: new FormControl(null),
      rating: new FormControl(null),
      director: new FormControl(null),
      status: new FormControl(null),
      customer: new FormControl(null),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("videoId")){

          this.mode = "edit";
            this.videoId = paramMap.get("videoId");
            this.videoService.getVideoById(this.videoId).subscribe(video => {
              this.form.setValue({
                  id: this.video.id,
                  title: this.video.title,
                  runningTime: this.video.runningTime,
                  genre: this.video.genre,
                  rating: this.video.rating,
                  director: this.video.director,
                  status: this.video.status,
                  customer: this.video.customer
              });
            });
      }else {
            this.mode = "create";
            this.videoId = null;
          }
        });
  }


  onSaveVideo(){
    if(this.mode === "create"){
      this.videoService.addVideo(
          this.form.value.title,
          this.form.value.runningTime,
          this.form.value.genre,
          this.form.value.rating,
          this.form.value.director,
          this.form.value.status,
          this.form.value.customer
      )
  }
  }

  getVideo(id:string){
    this.videoService.getVideoById(id).subscribe(video =>{
      console.log(video)
      this.video = video

    })
  }
  deleteVideo(id) {
    this.videoService.deleteVideo(id).subscribe(res =>{
      console.log("video has been deleted")
    })
  } 

}
