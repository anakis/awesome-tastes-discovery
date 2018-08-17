import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {

  @Input()
  specie: any = {};

  constructor() { }

  ngOnInit() {
  }

}
