import { Component, OnInit } from '@angular/core';
import { MarvelResourcesComponent } from '@app/marvel/marvel-resources/marvel-resources.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent extends MarvelResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setType() {
    this.type = 'character';
  }
  
}
