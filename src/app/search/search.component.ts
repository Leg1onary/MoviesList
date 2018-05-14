import { Component } from '@angular/core';
import {MoviesService} from "../movies.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  myControl: FormControl = new FormControl();

  isPicked: boolean = false;
  isAdded: boolean = false;
  SearchStr: string = '';
  movies: any;
  SelectedMovie: any;
  MoviesList: any[] = [];

  constructor(private service: MoviesService) {
  }

  handleChange() {
    if (!this.isPicked) {
      this.service.getMovie(this.SearchStr)
        .subscribe(movies => {
          this.movies = movies;
        })
    }
  }

  PickMovie(index) {
    this.SearchStr = this.movies.Search[index].Title;
    this.isPicked = true;
    this.SelectedMovie = this.movies.Search[index];
  }

  PushInFavorite(movie: string) {
    for (var i = 0; i < this.MoviesList.length; i++) {
      if (this.MoviesList[i].Title == movie) {
        this.isAdded = true;
      }
    }
    if (!this.isAdded) {
      this.MoviesList.push(this.SelectedMovie);
    }
    this.isAdded = false;
  }

  DeleteFromFavorite(movie: string) {
    for (var i = 0; i < this.MoviesList.length; i++) {
      if (this.MoviesList[i].Title == movie) {
        this.MoviesList.splice(i, 1);
      }
    }
  }

  GiveMovieInfo(movie: string) {

    for (var i = 0; i < this.MoviesList.length; i++) {
      if (this.MoviesList[i].Title == movie) {
        this.service.MovieInfo(this.MoviesList[i].imdbID)
      }
    }
  }
}
