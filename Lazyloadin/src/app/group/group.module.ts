import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { PublicgroupComponent } from './publicgroup/publicgroup.component';
import { PrivategroupComponent } from './privategroup/privategroup.component';


@NgModule({
  declarations: [
    PublicgroupComponent,
    PrivategroupComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
