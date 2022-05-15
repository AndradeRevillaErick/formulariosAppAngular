import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchesComponent } from './switches/switches.component';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicosComponent,
    DinamicosComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
