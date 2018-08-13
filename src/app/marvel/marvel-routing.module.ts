import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelComponent } from '@app/marvel/marvel.component';

const routes: Routes = [
  { path: '', component: MarvelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
