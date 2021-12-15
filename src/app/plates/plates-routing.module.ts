import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../shared/layout/layout.component';
import { MaterialComponent } from './material/material.component';
import { PlatesComponent } from './plates/plates.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: PlatesComponent },
      { path: 'two', component: TwoComponent },
      { path: 'material', component: MaterialComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatesRoutingModule {}
