import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl: FormControl = new FormControl();

  isAdded: boolean = false;
  isPicked: boolean = false;
  SearchStr: string = '';
  movies: any = [];
  SelectedMovie: any;

  constructor(private service: MoviesService) {

  }

  ngOnInit() {

  }

  handleChange() {
    if (!this.isPicked) {
      this.service.getMovie(this.SearchStr)
        .subscribe(movies => this.movies = movies)
    }
  }

  PickMovie(index) {
    this.SearchStr = this.movies.Search[index].Title;
    this.isPicked = true;
    this.SelectedMovie = this.movies.Search[index];
  }


  SetMovieInStorage(){
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let myMovie = JSON.parse(localStorage.getItem(key));
      if (this.SelectedMovie.Title == myMovie.Title) {
        this.isAdded = true;
      }
    }
    if (!this.isAdded ) {
      let key = this.SelectedMovie.imdbID;
      localStorage.setItem(key.toString(), JSON.stringify(this.SelectedMovie));
    }
    this.isAdded = false;
  }

  getMovieInfo(imdbID) {
    sessionStorage.clear();
    sessionStorage.setItem('1', imdbID);
  }

}
