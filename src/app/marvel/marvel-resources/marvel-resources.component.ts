import { OnInit } from '@angular/core';
import { Resource } from '@app/_common/resource.component';

export abstract class MarvelResourcesComponent extends Resource {

  setResource() {
    this.resource = 'marvel';
  }  
}
