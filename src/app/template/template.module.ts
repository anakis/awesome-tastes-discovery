import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarpComponent } from './warp/warp.component';
import { WarpContainerComponent } from './warp-container/warp-container.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './card/card.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WarpComponent, WarpContainerComponent, WelcomeComponent, CardComponent, RowComponent, ColComponent],
  exports: [WarpComponent, WarpContainerComponent, WelcomeComponent, CardComponent, RowComponent, ColComponent]
})
export class TemplateModule { }
