import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input()
  starship: any = {};

  constructor() { }

  ngOnInit() {
  }

}
