import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsComponent } from './star-wars.component';
import { StarWarsRoutingModule } from '@app/star-wars/star-wars-routing.module';
import { FeatureModule } from '@app/feature/feature.module';

@NgModule({
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    FeatureModule
  ],
  declarations: [StarWarsComponent]
})
export class StarWarsModule { }
