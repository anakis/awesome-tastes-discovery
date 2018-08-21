import { Component, OnInit } from '@angular/core';
import { MarvelResourcesComponent } from '@app/marvel/marvel-resources/marvel-resources.component';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent extends MarvelResourcesComponent implements OnInit {

  constructor() {
    super();
  }
  
  ngOnInit() {
  }
  
  setType() {
    this.type = 'serie';
  }
}
