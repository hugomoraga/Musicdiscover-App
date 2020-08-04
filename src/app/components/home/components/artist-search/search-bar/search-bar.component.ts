import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/core/services/artists.service';
import { Subject, Observable } from 'rxjs';
import { Artist } from 'src/app/core/models/artist';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  count,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  artists$: Observable<Artist[]>;
  private searchTerms = new Subject<string>();
  searchText;

  constructor(private artistService: ArtistsService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.artists$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.artistService.searchArtists(term))
    );
  }
}
