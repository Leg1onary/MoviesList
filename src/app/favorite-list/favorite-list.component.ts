import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  MovieList: any[] = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let myMovie = JSON.parse(localStorage.getItem(key));
      this.MovieList.push(myMovie);
    }

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

  getMovieInfo(imdbID) {
    sessionStorage.clear();
    sessionStorage.setItem('1', imdbID);
  }

}
