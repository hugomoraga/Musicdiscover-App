import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { SearchBarComponent } from './components/artist-search/search-bar/search-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { ArtistsService } from 'src/app/core/services/artists.service';
import { TracklistService } from 'src/app/core/services/tracklist.service';
import { AlbumService } from '../../core/services/album.service';

@NgModule({
  declarations: [
    HomeComponent,
    ArtistSearchComponent,
    SearchBarComponent,
    LoadingComponent,
    ArtistInfoComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    ArtistsService,
    TracklistService,
    AlbumService
  ]
})
export class HomeModule { }
