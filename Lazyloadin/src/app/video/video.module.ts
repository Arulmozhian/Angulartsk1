import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    SportsComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
