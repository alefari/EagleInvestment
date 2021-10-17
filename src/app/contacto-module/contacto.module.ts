import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { VenderComponent } from './components/vender/vender.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VenderComponent,
    ComprarComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule
  ]
})
export class ContactoModule { }
