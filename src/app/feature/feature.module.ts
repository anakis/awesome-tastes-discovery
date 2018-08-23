import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { FirstLetterUpperPipe } from './first-letter-upper.pipe';
import { LikeComponent } from './like/like.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '@app/template/template.module';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule
  ],
  declarations: [PageComponent, FirstLetterUpperPipe, LikeComponent, LoadingIndicatorComponent],
  exports: [PageComponent, LikeComponent, FirstLetterUpperPipe, LoadingIndicatorComponent]
})
export class FeatureModule { }
