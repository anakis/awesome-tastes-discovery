import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { ComicComponent } from './comic/comic.component';
import { CreatorComponent } from './creator/creator.component';
import { EventComponent } from './event/event.component';
import { SerieComponent } from './serie/serie.component';
import { StorieComponent } from './storie/storie.component';
import { FeatureModule } from '@app/feature/feature.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule
  ],
  declarations: [CharacterComponent, ComicComponent, CreatorComponent, EventComponent, SerieComponent, StorieComponent],
  exports: [CharacterComponent, ComicComponent, CreatorComponent, EventComponent, SerieComponent, StorieComponent]
})
export class MarvelResourcesModule { }
