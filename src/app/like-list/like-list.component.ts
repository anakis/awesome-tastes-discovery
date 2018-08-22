import { Component, OnInit } from '@angular/core';
import { LikeService } from '@app/feature/like/like.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {

  data: Array<any> = [];

  constructor(private service: LikeService) {

   }

  ngOnInit() {
    this.getData();
  }

  onLikeChange() {
    this.getData();
  }

  getData() {
    this.data = this.service.getLikes();
  }

}
