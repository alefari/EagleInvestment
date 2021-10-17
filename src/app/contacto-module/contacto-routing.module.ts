import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './components/comprar/comprar.component';
import { VenderComponent } from './components/vender/vender.component';

const routes: Routes = [
  {path: '', redirectTo: 'vender'},
  {path: 'vender', component: VenderComponent},
  {path: 'comprar', component: ComprarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
