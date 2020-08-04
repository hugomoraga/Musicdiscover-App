import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from 'src/app/core/models/artist';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getArtists(query?: number): Observable<Artist> {
    return this.http.get<Artist>(`${environment.API_DEEZER}/artist/${query}`);
  }

  searchArtists(term?: string): Observable<Artist[]> {
    return this.http
      .get<any>(`${environment.API_DEEZER}/search/artist?q=${term}`)
      .pipe(map((x) => x.data));
  }

}
