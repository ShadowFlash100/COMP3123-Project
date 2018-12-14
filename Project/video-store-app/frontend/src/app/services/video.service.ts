import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  getVideos(){
    return this.http.get(`${this.uri}/videos`)
  }
  getVideoById(id){
    return this.http.get(`${this.uri}/videos/${id}`)
  }
  addVideo(title, runTime, genre, rating, director, status, customer) {
    const video = {
      title: title,
      runTime: runTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status,
      customer: customer
    };
    return this.http.post(`${this.uri}/videos/add`, video);
  }

  updateVideo(id,title, runTime, genre, rating, director, status, customer) {
    const video = {
      title: title,
      runTime: runTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status,
      customer: customer
    };
    return this.http.post(`${this.uri}/videos/update/${id}`, video);
  }
  deleteVideo(id) {
    return this.http.get(`${this.uri}/videos/delete/${id}`);
  }

  reserve(){
    
  }
}
