import { Component, OnInit } from '@angular/core';
import { MarvelResourcesComponent } from '@app/marvel/marvel-resources/marvel-resources.component';

@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.scss']
})
export class StorieComponent extends MarvelResourcesComponent implements OnInit {

  constructor() {
    super();
  }
  
  ngOnInit() {
  }
  
  setType() {
    this.type = 'storie';
  }  
}
