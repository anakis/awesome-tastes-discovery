import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarpComponent } from './warp/warp.component';
import { WarpContainerComponent } from './warp-container/warp-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WarpComponent, WarpContainerComponent],
  exports: [WarpComponent, WarpContainerComponent]
})
export class TemplateModule { }
