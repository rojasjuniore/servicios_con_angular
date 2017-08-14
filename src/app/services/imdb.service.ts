import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import '../rxjs.operators';
import { Movie } from '../components/homepage/movie';
// http://rest7.com/movie_info


@Injectable()
export class ImdbService {

  movies: Movie[];
  constructor(private _http: Http) { }


  public search(termino: string) {
    this.getMovies(termino)
      .subscribe(
      result => this.movies = result,
      error => console.log(error));
    console.log(this.movies);
  }

  public getMovies(termino: string): Observable<Movie[]> {

    const url = `http://api.rest7.com/v1/movie_info.php?title=${termino}`;
    return this._http.get(url)
      .map(data => {
        // this.parseRespose
        console.log(data);
      })
      .catch(() => Observable.throw('Algo salio mal'));
  }

  private parseRespose(_response: Response): Movie[] {
    // tslint:disable-next-line:curly
    if (!_response.json() || !_response.json().movies) return [];

    return _response.json().movies.map(
      jsonMovie => new Movie(
        jsonMovie['title'],
        jsonMovie['year'],
        jsonMovie['writer'],
        jsonMovie['poster'],
        jsonMovie['imdb'],
        jsonMovie['thumb']
      )
    );

  }

}
