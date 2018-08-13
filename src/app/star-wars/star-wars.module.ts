import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsComponent } from './star-wars.component';
import { StarWarsRoutingModule } from '@app/star-wars/star-wars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StarWarsRoutingModule
  ],
  declarations: [StarWarsComponent]
})
export class StarWarsModule { }
