import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";
import { AppHttpService } from "@app/app-http.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private appHttpService: AppHttpService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => { 
          this.appHttpService.setHttpStatus(true);
          return event; 
        }),
      catchError(error => { return Observable.throw(error)}),
      finalize(() => {
        this.appHttpService.setHttpStatus(false);
      })
    )
  }
}