import { Component, OnInit } from '@angular/core';
import{VideoService} from '../../services/video.service';
import {HttpClient} from '@angular/common/http'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  videos: any;

  constructor(private videoService: VideoService, public auth: AuthService ) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo(){
    this.videoService.getVideos().subscribe(videos =>{
      this.videos = videos

    })
  }
}
