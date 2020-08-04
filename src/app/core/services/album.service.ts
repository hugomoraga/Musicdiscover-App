import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, range } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Albums } from 'src/app/core/models/albums';


@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbumlist(artistID?: number): Observable<Albums> {
    return this.http.get<Albums>(
      `${environment.API_DEEZER}/artist/${artistID}/albums`
      );
  }

}
