import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPropiedadesComponent } from './components/user-propiedades/user-propiedades.component';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  {
    path: '', component: UserBaseComponent,
    children: [
      {path: '', redirectTo: 'propiedades'},
      {path: 'favoritos', component: FavoritosComponent},
      {path: 'propiedades', component: UserPropiedadesComponent},
      {path: 'perfil', component: UserPerfilComponent},
      {path: 'admin', component: AdminComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
