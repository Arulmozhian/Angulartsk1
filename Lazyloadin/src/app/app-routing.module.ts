import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
},
{
  path:"marketplace",
loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule) 
},
{
  path:"video",
loadChildren: () => import('./video/video.module').then(m => m.VideoModule) 
},
{
  path:"game",
  loadChildren: () => import('./game/game.module').then(m=> m.GameModule)
},
{
  path:"group",
  loadChildren: () => import('./group/group.module').then(m=> m.GroupModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
