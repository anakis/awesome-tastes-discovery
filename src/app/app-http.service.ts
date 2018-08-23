import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppHttpService {
  private underRequest$: BehaviorSubject<boolean>;
  constructor() {
    this.underRequest$ = new BehaviorSubject(false);
  }

  setHttpStatus(status: boolean) {
    this.underRequest$.next(status);
  }

  getHttpStatus(): Observable<boolean> {
    return this.underRequest$.asObservable();
  }
}