import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie, MovieCard, SearchDTO } from './movies.model';

@Injectable()
export class MoviesService {


  constructor(private _httpClient: HttpClient) { }

  search(searchQuery: SearchDTO) {
    let params = new HttpParams();
    params = params.append('apikey', environment.omdbapiKey);
    params = params.append('s', searchQuery.title);

    if (searchQuery.type) {
      params = params.append('type', searchQuery.type);
    }

    return this._httpClient.get<{ Search: MovieCard[], Response: string }>(environment.omdbApiUrl, { params })
  }

  findById(imdbID: string) {
    let params = new HttpParams();
    params = params.append('apikey', environment.omdbapiKey);
    params = params.append('i', imdbID);

    return this._httpClient.get<Movie>(environment.omdbApiUrl, { params })
  }

}
