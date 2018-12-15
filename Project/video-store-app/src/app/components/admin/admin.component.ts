import { Component, OnInit } from '@angular/core';
import{VideoService} from '../../services/video.service';
import {HttpClient} from '@angular/common/http'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title='Administrator View'
  constructor() { }

  ngOnInit() {
  }

}
