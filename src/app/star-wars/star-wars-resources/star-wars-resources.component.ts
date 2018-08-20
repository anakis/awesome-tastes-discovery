import { Component, OnInit, Input } from '@angular/core';


export abstract class StarWarsResourcesComponent implements OnInit {

  /**
   * data object to be displayed
   */
  @Input()
  data: any = {};

  /**
   * type of resource to be handle in LikeList screen
   */
  readonly type: String = 'star-wars';

  constructor() { }

  ngOnInit() {
  }

}
