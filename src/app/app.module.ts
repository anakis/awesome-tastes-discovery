import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateModule } from '@app/template/template.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LikeListComponent } from './like-list/like-list.component';
import { StarWarsResourcesModule } from '@app/star-wars/star-wars-resources/star-wars-resources.module';
import { MarvelResourcesModule } from '@app/marvel/marvel-resources/marvel-resources.module';
import { FeatureModule } from '@app/feature/feature.module';
import { AppHttpService } from '@app/app-http.service';
import { AppHttpInterceptor } from '@app/app-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LikeListComponent,
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    HttpClientModule,
    AppRoutingModule,
    StarWarsResourcesModule,
    MarvelResourcesModule,
    FeatureModule
  ],
  providers: [
    AppHttpService,
    AppHttpInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
