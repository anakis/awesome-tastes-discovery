import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input()
  data: any = {};

  @Input()
  type: String = '';

  constructor() { }

  ngOnInit() {
  }

  saveLike() {
    console.log(this.data);
    console.log(this.type);
  }
}
