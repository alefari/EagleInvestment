import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';


@NgModule({
  declarations: [
    UserBaseComponent,
    UserPerfilComponent,
    AdminComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
