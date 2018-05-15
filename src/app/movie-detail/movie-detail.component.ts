import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {

  movieData: any[];

  constructor(private service: MoviesService) {

  }

  ngOnInit() {
    this.service.MovieInfo(sessionStorage.getItem('1'))
      .subscribe(movieData => {this.movieData = movieData});
    console.log(this.movieData);
  }
}
