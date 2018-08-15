import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { FirstLetterUpperPipe } from './first-letter-upper.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageComponent, FirstLetterUpperPipe],
  exports: [PageComponent, FirstLetterUpperPipe]
})
export class FeatureModule { }
