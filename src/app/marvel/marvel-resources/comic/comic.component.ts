import { Component, OnInit } from '@angular/core';
import { MarvelResourcesComponent } from '@app/marvel/marvel-resources/marvel-resources.component';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent extends MarvelResourcesComponent implements OnInit {

  constructor() {
    super();
  }
  
  ngOnInit() {
  }
  
  setType() {
    this.type = 'comic';
  }
  
}
