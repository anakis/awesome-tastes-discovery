import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warp',
  templateUrl: './warp.component.html',
  styleUrls: ['./warp.component.scss']
})
export class WarpComponent implements OnInit {

  @Input()
  color: String;

  constructor() { }

  ngOnInit() {
  }

  checkYellow() {
    return this.color === 'yellow';
  }

  checkBlue() {
    return this.color === 'blue';
  }

}
