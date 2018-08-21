import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor() { }

  saveLike(like: any): boolean {
    try {
      let likes: Array<any> = this.getLikes();
      likes.push(like);
      localStorage.setItem('likes', JSON.stringify(likes));
      return true;
    } catch (e) {
      return false;
    }
  }

  removeLike(data: any): boolean {
    try {
      let likes: Array<any> = this.getLikes();
      likes.splice(likes.findIndex(e => e.data.url === data.url), 1);
      localStorage.setItem('likes', JSON.stringify(likes));
      return true;
    } catch (e) {
      return false;
    }
  }

  getLikes(): Array<any> {
    let likes = localStorage.getItem('likes');
    if (likes)
      return JSON.parse(likes);
    return [];
  }

  checkLiked(data, checkBy?): boolean {
    let likes: Array<any> = this.getLikes();
    if(checkBy)
      return likes.some(e => e.data[checkBy] === data[checkBy]);
    return likes.some(e => e.data.url === data.url);
  }
}
