import { Component } from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  SearchStr: string = '';
  minLength: number = 3;
  isLoaded: boolean = false;
  movies: string[];

  constructor(private service: MoviesService) { }

  handleChange() {
    if(this.minLength <= this.SearchStr.length) {
      this.service.getMovie(this.SearchStr)
        .subscribe( movies => {
          this.movies = movies;
            this.isLoaded = true;
        })
    }
  }

}
