import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { PerfilAgenteComponent } from './components/perfil-agente/perfil-agente.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InmueblesComponent,
    InmuebleComponent,
    PerfilAgenteComponent,
  ],
  imports: [
    CommonModule,
    InmueblesRoutingModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule
  ]
})
export class InmueblesModule { }
