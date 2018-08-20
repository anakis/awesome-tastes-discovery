import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsComponent } from './star-wars.component';
import { StarWarsRoutingModule } from '@app/star-wars/star-wars-routing.module';
import { FeatureModule } from '@app/feature/feature.module';
import { StarWarsService } from '@app/star-wars/star-wars.service';
import { StarWarsResourcesModule } from '@app/star-wars/star-wars-resources/star-wars-resources.module';

@NgModule({
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    FeatureModule,
    StarWarsResourcesModule
  ],
  declarations: [StarWarsComponent]
})
export class StarWarsModule { }
