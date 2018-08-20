import { Component, OnInit, Input } from '@angular/core';
import { StarWarsResourcesComponent } from '@app/star-wars/star-wars-resources/star-wars-resources.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent extends StarWarsResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setType() {
    this.type = 'vehicle';
  }
}
