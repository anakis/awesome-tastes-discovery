import { Component, OnInit, Input } from '@angular/core';
import { StarWarsResourcesComponent } from '@app/star-wars/star-wars-resources/star-wars-resources.component';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent extends StarWarsResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setType() {
    this.type = 'specie';
  }

}
