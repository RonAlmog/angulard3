import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatesComponent } from './plates/plates.component';
import { SharedModule } from '../shared/shared.module';
import { PlatesRoutingModule } from './plates-routing.module';

@NgModule({
  declarations: [PlatesComponent],
  imports: [CommonModule, SharedModule, PlatesRoutingModule],
})
export class PlatesModule {}