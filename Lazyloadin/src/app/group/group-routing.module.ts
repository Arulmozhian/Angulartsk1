import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivategroupComponent } from './privategroup/privategroup.component';
import { PublicgroupComponent } from './publicgroup/publicgroup.component';

const routes: Routes = [
  {path: '',component: PrivategroupComponent},
  {path:'privategroup',component: PrivategroupComponent},
  {path:'publicgroup', component: PublicgroupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
