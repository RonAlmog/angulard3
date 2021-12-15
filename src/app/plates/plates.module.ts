import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatesComponent } from './plates/plates.component';
import { SharedModule } from '../shared/shared.module';
import { PlatesRoutingModule } from './plates-routing.module';
import { TwoComponent } from './two/two.component';
import { MaterialComponent } from './material/material.component';
import { PlateCellComponent } from './plate-cell/plate-cell.component';

@NgModule({
  declarations: [PlatesComponent, TwoComponent, MaterialComponent, PlateCellComponent],
  imports: [CommonModule, SharedModule, PlatesRoutingModule],
})
export class PlatesModule {}
