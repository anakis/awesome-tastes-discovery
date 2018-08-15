import { Component, OnInit } from '@angular/core';
import { StarWarsService, FILMS, VEHICLES, Response } from '@app/star-wars/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  constructor(private service: StarWarsService) {

  }
  data: Response;

  ngOnInit() {
    this.service.get(VEHICLES).subscribe(
      (data: Response) => {this.data = { ...data }; console.log(this.data)},
      err => console.log(err)
    );
  }

}
