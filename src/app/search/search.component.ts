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
  SearchStr: string = '';
  movies: any[];
  SelectedMovie: any;

  constructor(private service: MoviesService) { }

  handleChange() {
    if(!this.isPicked) {
      this.service.getMovie(this.SearchStr)
        .subscribe( movies => {
          this.movies = movies;
        })
    }
  }

  PickMovie(index) {
    this.SearchStr = this.movies.Search[index].Title;
    this.isPicked = true;
    this.SelectedMovie = this.movies.Search[index];
    console.log(this.SelectedMovie);

  }

}
