import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SupermarioComponent } from './supermario/supermario.component';
import { CarraceComponent } from './carrace/carrace.component';


@NgModule({
  declarations: [
    SupermarioComponent,
    CarraceComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
