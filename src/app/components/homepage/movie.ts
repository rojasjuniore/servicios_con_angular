export class Movie {

    title: string;
    imdb: string;
    year?: string;
    runtime?: string;
    director?: string;
    cast?: string;
    poster?: string;
    score?: string;
    popularity?: string;
    country?: string;
    writer?: string;
    language?: string;
    genre?: string;
    thumb?: string;
    type?: string;

    constructor(
        _title: string,
        _imdb: string,
        _year?: string,
        _type?: string,
        _runtime?: string,
        _director?: string,
        _cast?: string,
        _poster?: string,
        _score?: string,
        _popularity?: string,
        _country?: string,
        _writer?: string,
        _language?: string,
        _genre?: string,
        _thumb?: string) {

        this.title = _title;
        this.year = _year;
        this.writer = _writer;
        this.poster = _poster;
        this.imdb = _imdb;
        this.thumb = _thumb;


    }

}
