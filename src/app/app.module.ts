import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailComponent} from "./movie-detail/movie-detail.component";

import {MoviesService} from "./services/movies.service";

import {RouterModule} from "@angular/router";
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

const routes = [
  {path: '', component: SearchComponent},
  {path: 'movie-detail', component: MovieDetailComponent},
  {path: 'favorite-list', component: FavoriteListComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieDetailComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatSnackBarModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
