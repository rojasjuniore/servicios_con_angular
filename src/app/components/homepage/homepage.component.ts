import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ImdbService } from '../../services/imdb.service';
import { Movie } from './movie';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private movies: Movie[];
  private name = '';
  searchControl: FormControl = new FormControl();

  constructor(private _imdbService: ImdbService) { }

  ngOnInit() {
    this.searchControl.
      valueChanges.
      debounceTime(500)
      .distinctUntilChanged()
      .subscribe(newValue => this._imdbService.search(newValue));
  }

  search() {
    this._imdbService.search(this.name);
  }

}
