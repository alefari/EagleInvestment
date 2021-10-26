import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { PerfilAgenteComponent } from './components/perfil-agente/perfil-agente.component';

const routes: Routes = [
  { path: '', component: InmueblesComponent },
  { path: 'inmueble/:id', component: InmuebleComponent },
  { path: 'agente/:id', component: PerfilAgenteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }
