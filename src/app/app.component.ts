import { Component } from '@angular/core';
import { AppHttpService } from '@app/app-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'awesome-tastes-discovery';
  loading: boolean;

  constructor(appHttpService: AppHttpService) {
    appHttpService.getHttpStatus().subscribe(status => this.loading = status);
  }
}
