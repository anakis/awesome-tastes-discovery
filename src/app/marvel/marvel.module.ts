import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { MarvelComponent } from './marvel.component';
import { FeatureModule } from '@app/feature/feature.module';
import { MarvelResourcesModule } from '@app/marvel/marvel-resources/marvel-resources.module';

@NgModule({
  imports: [
    CommonModule,
    MarvelRoutingModule,
    FeatureModule,
    MarvelResourcesModule
  ],
  declarations: [MarvelComponent]
})
export class MarvelModule { }
