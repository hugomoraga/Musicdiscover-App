
import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../../../core/services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

    constructor( private genre: GenreService) { }

    ngOnInit() {
    }

  }
