import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarraceComponent } from './carrace/carrace.component';
import { SupermarioComponent } from './supermario/supermario.component';

const routes: Routes = [
  {path: '',component: CarraceComponent},
  {path:'carrace',component: CarraceComponent},
  {path:'supermario', component: SupermarioComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
