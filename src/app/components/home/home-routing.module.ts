import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:searchTerm', component: ArtistSearchComponent
  },
  { path: 'artist/:id', component: ArtistInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
