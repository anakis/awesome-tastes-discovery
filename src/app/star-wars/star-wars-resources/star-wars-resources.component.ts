import { OnInit, Input } from '@angular/core';


export abstract class StarWarsResourcesComponent implements OnInit {

  /**
   * data object to be displayed
   */
  @Input()
  data: any = {};

  /**
   * type of resource to be handle in LikeList screen
   */
  type: String = '';
  /**
   * resource to be handle in LikeList screen
   */
  readonly resource: String = 'star-wars';

  constructor() {
    this.setType();
   }

  ngOnInit() {
  }

  /**
   *  Method to be implemented to force resource type definition
   *  Ex.: this.type = 'SOME_VALUE';
   */
  abstract setType();
}
