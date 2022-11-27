import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path: '',component: NewsComponent},
  {path:'news',component: NewsComponent},
  {path:'sports', component: SportsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
