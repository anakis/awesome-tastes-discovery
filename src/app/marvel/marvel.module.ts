import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { MarvelComponent } from './marvel.component';
import { FeatureModule } from '@app/feature/feature.module';

@NgModule({
  imports: [
    CommonModule,
    MarvelRoutingModule,
    FeatureModule
  ],
  declarations: [MarvelComponent]
})
export class MarvelModule { }
