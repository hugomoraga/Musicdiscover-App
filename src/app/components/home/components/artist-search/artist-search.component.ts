import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/core/services/artists.service';
import { Artist } from 'src/app/core/models/artist';
import { randomInt } from 'src/app/utils/random-num';


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  artists: Artist[] = [];
  loading = true;
  rndNumber = randomInt(21, 3000) - 20;

  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {
    for (
      let artistNo = this.rndNumber;
      artistNo <= this.rndNumber + 20;
      artistNo++
    ) {
      this.artistService.getArtists(artistNo).subscribe(x => {
        this.artists.push(x);
        this.loading = false;
      });
    }
  }
}
