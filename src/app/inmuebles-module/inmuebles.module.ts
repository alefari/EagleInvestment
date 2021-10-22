import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';
import { FiltrosComponent } from './components/inmuebles/filtros/filtros.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';


@NgModule({
  declarations: [
    InmueblesComponent,
    FiltrosComponent,
    InmuebleComponent
  ],
  imports: [
    CommonModule,
    InmueblesRoutingModule,
    FontAwesomeModule,
  ]
})
export class InmueblesModule { }
