import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input()
  title: String = '';
  
  @Input()
  instructions: String = '';

  constructor() { }

  ngOnInit() {
  }

  makePagePresentation() {
    return `${this.title} resources!`;
  }

}
