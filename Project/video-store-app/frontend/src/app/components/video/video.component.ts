import { Component, OnInit } from '@angular/core';
import{VideoService} from '../../services/video.service';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  videos: any;

  constructor(private videoService: VideoService, private router: Router, public auth: AuthService ) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo(){
    this.videoService.getVideos().subscribe(videos =>{
      console.log(videos)
      this.videos = videos

    })
  }
  deleteVideo(id) {
    this.videoService.deleteVideo(id).subscribe(res =>{
      console.log("video has been deleted")
      this.getVideo();
    })
  } 
}
