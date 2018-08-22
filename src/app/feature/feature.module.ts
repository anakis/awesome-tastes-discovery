import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { FirstLetterUpperPipe } from './first-letter-upper.pipe';
import { LikeComponent } from './like/like.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '@app/template/template.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule
  ],
  declarations: [PageComponent, FirstLetterUpperPipe, LikeComponent],
  exports: [PageComponent, LikeComponent, FirstLetterUpperPipe]
})
export class FeatureModule { }
