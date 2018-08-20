import { Component, OnInit, Input } from '@angular/core';
import { StarWarsResourcesComponent } from '@app/star-wars/star-wars-resources/star-wars-resources.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent extends StarWarsResourcesComponent implements OnInit {


  constructor() {
    super();
  }
  
  setType() {
    this.type = 'film';
  }

  ngOnInit() {
  }

}
