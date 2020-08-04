import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GenreComponent } from './components/genre/genre.component';
import { GenreRoutingModule } from './genre-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
      GenreComponent,

    ],
    imports: [
      CommonModule,
      GenreRoutingModule,
      MaterialModule,
    ],
    exports: [
      GenreComponent
    ],
    providers: [

    ]
  })
  export class GenreModule { }
