import { Component, OnInit } from '@angular/core';
import { MarvelResourcesComponent } from '@app/marvel/marvel-resources/marvel-resources.component';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent extends MarvelResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
  
  setType() {
    this.type = 'creator';
  }

}
