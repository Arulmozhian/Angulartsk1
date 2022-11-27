import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { FruitsComponent } from './fruits/fruits.component';


@NgModule({
  declarations: [
    VegitablesComponent,
    FruitsComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
