import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {

  movieData: {
    Title:'',
    Year:'',
    Poster:'',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Production: '',
    Website: ''
  };

  constructor(private service: MoviesService) {
    this.service.MovieInfo(sessionStorage.getItem('1'))
      .subscribe(movieData => {this.movieData = movieData});

  }

  ngOnInit() {

  }
}
