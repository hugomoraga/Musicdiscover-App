import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/core/models/artist';
import { Albums } from 'src/app/core/models/albums';
import { Album } from 'src/app/core/models/album';
import { Track } from 'src/app/core/models/track';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistsService } from 'src/app/core/services/artists.service';
import { TracklistService } from 'src/app/core/services/tracklist.service';
import { AlbumService } from 'src/app/core/services/album.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {
  artistId: number;
  artist: Artist;
  tracks: Track[];
  albums: Albums;
  albumlist: Album[] = new Array();
  loading = true;

  constructor(
    private actRoute: ActivatedRoute,
    private artistService: ArtistsService,
    private location: Location,
    private albumService: AlbumService,
    private tracklistService: TracklistService,
  ) {
    this.artistId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.artistService.getArtists(this.artistId).subscribe(x => {
      this.artist = x;
      this.loading = false;
    });

    this.tracklistService.getTrackList(this.artistId).subscribe(x => {
      this.tracks = x;
    });

    this.albumService.getAlbumlist(this.artistId).subscribe(x => {
      this.albums = x;
      this.albumlist = this.albums.data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}

