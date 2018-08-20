import { Component, OnInit, Input } from '@angular/core';
import { StarWarsResourcesComponent } from '@app/star-wars/star-wars-resources/star-wars-resources.component';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent extends StarWarsResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setType() {
    this.type = 'planet';
  }
}
