import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { DonaComponent } from './dona/dona.component';

import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    CounterComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    CounterComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
