import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@app/main/main.component';
import { LikeListComponent } from '@app/like-list/like-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'star-wars', pathMatch: 'full', loadChildren: './star-wars/star-wars.module#StarWarsModule'},
  { path: 'marvel', pathMatch: 'full' , loadChildren: './marvel/marvel.module#MarvelModule'},
  { path: 'likes', component: LikeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
