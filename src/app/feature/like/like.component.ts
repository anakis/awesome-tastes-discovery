import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input()
  checkBy: String = '';

  @Output()
  likeChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private service: LikeService) { }

  ngOnInit() {
  }

  saveLike() {
    const { data, type, resource } = this;
    if (this.service.saveLike({ data, type, resource }))
      console.log("saved");
    else
      console.log("error");
    this.emit();
  }

  disLike() {
    const { data } = this;
    if (this.service.removeLike(data))
      console.log("removed");
    else
      console.log("error");
    this.emit();
  }

  emit() {
    this.likeChange.emit(true);
  }

  active() {
    return this.service.checkLiked(this.data, this.checkBy);
  }
}
