import { Component, OnInit } from '@angular/core';
import { StarWarsService, ENDPOINTS, Response } from '@app/star-wars/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  resources = ENDPOINTS;

  currentResource = '';

  instructions = 'Please select one of the resource categories below, then a list of items from each category will be displayed. So, you can give like to the items of your choice!';

  constructor(private service: StarWarsService) {

  }

  resourcesKeys() {
    return Object.keys(this.resources);
  }

  data: Response = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  ngOnInit() {

  }

  getResource(e) {
    this.currentResource = e;
    this.service.get(e).subscribe(
      (data: Response) => { this.data = { ...data }; console.log(this.data) },
      err => console.log(err)
    );
  }

}
