import { Component, OnInit } from '@angular/core';
import { MarvelResourcesComponent } from '@app/marvel/marvel-resources/marvel-resources.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent extends MarvelResourcesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
  
  setType() {
    this.type = 'event';
  }

}
