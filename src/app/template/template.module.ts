import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarpComponent } from './warp/warp.component';
import { WarpContainerComponent } from './warp-container/warp-container.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './card/card.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WarpComponent, WarpContainerComponent, WelcomeComponent, CardComponent, RowComponent, ColComponent, SpinnerComponent],
  exports: [WarpComponent, WarpContainerComponent, WelcomeComponent, CardComponent, RowComponent, ColComponent, SpinnerComponent]
})
export class TemplateModule { }
