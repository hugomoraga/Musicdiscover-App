import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './components/genre/genre.component';
import { GenreInfoComponent } from './components/genre/genre-info/genre-info.component';


const routes: Routes = [
  {
    path: '', component: GenreComponent
  },
  { path: 'genre/:id', component: GenreInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
