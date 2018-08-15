import { Component, OnInit } from '@angular/core';
import { MarvelService, COMICS } from '@app/marvel/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {

  constructor(private service: MarvelService) { }

  ngOnInit() {
    this.service.get(COMICS).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
