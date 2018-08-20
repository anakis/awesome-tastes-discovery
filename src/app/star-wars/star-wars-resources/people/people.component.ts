import { Component, OnInit, Input } from '@angular/core';
import { StarWarsResourcesComponent } from '@app/star-wars/star-wars-resources/star-wars-resources.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent extends StarWarsResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  setType() {
    this.type = 'people';
  }

  ngOnInit() {
  }

}
