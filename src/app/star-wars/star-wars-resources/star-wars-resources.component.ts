import { OnInit } from '@angular/core';
import { Resource } from '@app/_common/resource.component';


export abstract class StarWarsResourcesComponent extends Resource {    
    
  setResource() {
    this.resource = 'star-wars';
  }
}
