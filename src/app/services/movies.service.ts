import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";


@Injectable()
export class MoviesService {
  constructor (private http:HttpClient) {}

  getMovie(title: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?s=${title}&apikey=dc41b897`)
  }

  MovieInfo(imdbID: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=dc41b897`)
  }
}
