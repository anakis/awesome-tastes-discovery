import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarpComponent } from './warp/warp.component';
import { WarpContainerComponent } from './warp-container/warp-container.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WarpComponent, WarpContainerComponent, WelcomeComponent],
  exports: [WarpComponent, WarpContainerComponent, WelcomeComponent]
})
export class TemplateModule { }
