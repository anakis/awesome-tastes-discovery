import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { FilmComponent } from './film/film.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SpecieComponent } from './specie/specie.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeopleComponent, FilmComponent, StarshipComponent, VehicleComponent, SpecieComponent, PlanetComponent],
  exports: [PeopleComponent, FilmComponent, StarshipComponent, VehicleComponent, SpecieComponent, PlanetComponent]
})
export class StarWarsResourcesModule { }
