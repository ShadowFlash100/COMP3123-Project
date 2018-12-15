import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  result:any;
  constructor(private http: HttpClient) { }
  
  getVideos(){
    const uri = 'http://localhost:3000/videos';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  addVideo(title, runTime, genre, rating, director, status, reserve) {
    const uri = 'http://localhost:3000/videos/add';
    const video = {
      title: title,
      runTime: runTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status,
      reserve:reserve
    };
    this.http.post(uri, video)
        .subscribe(res => console.log('Done'));
  }
  editVideo(id) {
    const uri = 'http://localhost:3000/videos/edit/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  updateVideo(title, runTime, genre, rating, director, status,id) {
    const uri = 'http://localhost:3000/videos/update/' + id;
    const video = {
      title: title,
      runTime: runTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status
    };this
    .http
    .post(uri, video)
    .subscribe(res => console.log('Done'));
}
  deleteVideo(id) {
    const uri = 'http://localhost:3000/videos/delete/' + id;

    return this
        .http
        .get(uri)
        .pipe(map(res => {
          return res;
        }));
  }
  reserve(id){
    return this
    .http
    .get('http://localhost:3000/videos/reserve/'+id)
    .pipe(map(res => {
      return res;
    }));
  }

  reserveVideo(title, runTime, genre, rating, director, status,id) {
    const uri = 'http://localhost:3000/videos/reservevideo/' + id;

    const video = {
      title: title,
      runTime: runTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status
    }; 
    this.http.post(uri, video).subscribe(res =>{
      console.log("done")
    })
  }
}
