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
  movies: any;
  SelectedMovie: any;
  MovieList: any[] = [];

  constructor(private service: MoviesService) {
  }

  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let myMovie = JSON.parse(localStorage.getItem(key));
      this.MovieList.push(myMovie);
    }
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
      this.MovieList.push(this.SelectedMovie);
    }
    this.isAdded = false;
  }

  DeleteMovieFromStorage(imdbID:string,indx: number){
    localStorage.removeItem(imdbID);
    this.MovieList.splice(indx,1);
    console.log(this.MovieList)
  }


  DeleteAllFavorite() {
    localStorage.clear();
    this.MovieList.splice(0,this.MovieList.length);
  }

}
