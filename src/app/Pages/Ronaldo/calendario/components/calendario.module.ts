import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioRoutes } from './calendario-route.routing';


@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutes
  ]
})
export class CalendarioModule { }
