import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';

const routes: Routes = [
  { path: '', component: InmueblesComponent },
  { path: 'inmueble/:id', component: InmuebleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }
