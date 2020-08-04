import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Track } from 'src/app/core/models/track';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TracklistService {
  constructor(private http: HttpClient) {}

  getTrackList(artistID?: number): Observable<Track[]> {
    return this.http
      .get<any>(`${environment.API_DEEZER}/artist/${artistID}/top?limit=5`)
      .pipe(map((x) => x.data));
  }
}
