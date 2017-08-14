import { Component, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ImdbService } from '../../services/imdb.service';
import { Movie } from '../homepage/movie';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements DoCheck {

  private movies: Movie[];
  constructor(private _imdbService: ImdbService) { }

  ngDoCheck() {
    this.movies = this._imdbService.movies;
  }

}
