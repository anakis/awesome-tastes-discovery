import { Component, OnInit } from '@angular/core';
import { MarvelService, ENDPOINTS, Response } from '@app/marvel/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {

  resources = ENDPOINTS;

  currentResource = '';
  
  data: Response = {
    data: {
      results: []
    }
  };

  constructor(private service: MarvelService) { }

  resourcesKeys() {
    return Object.keys(this.resources);
  }

  ngOnInit() {
    
  }

  getResource(e) {
    this.currentResource = e;
    console.log(this.currentResource);
    this.service.get(e).subscribe(
      (data: Response) => { this.data = data; console.log(this.data) },
      err => console.log(err)
    );
  }
}
