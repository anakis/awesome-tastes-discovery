import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { MarvelComponent } from './marvel.component';

@NgModule({
  imports: [
    CommonModule,
    MarvelRoutingModule
  ],
  declarations: [MarvelComponent]
})
export class MarvelModule { }
