import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { NgChartsModule } from 'ng2-charts';
import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementadorComponent,
    DonutComponent
  ]
})
export class ComponentsModule { }
