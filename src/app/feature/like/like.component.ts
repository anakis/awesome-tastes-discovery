import { Component, OnInit, Input } from '@angular/core';
import { LikeService } from '@app/feature/like/like.service';

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

  @Input()
  resource: String = '';

  constructor(private service: LikeService) { }

  ngOnInit() {
  }

  saveLike() {
    const { data, type, resource } = this;
    if (this.service.saveLike({ data, type, resource }))
      console.log("saved");
    else
      console.log("error");
  }

  disLike() {
    const { data } = this;
    if (this.service.removeLike(data))
      console.log("removed");
    else
      console.log("error");
  }

  active() {
    return this.service.checkLiked(this.data);
  }
}
