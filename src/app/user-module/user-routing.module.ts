import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPropiedadesComponent } from './components/user-propiedades/user-propiedades.component';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { NoFavoritosComponent } from './components/no-favoritos/no-favoritos.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminSolicitudesComponent } from './components/admin-solicitudes/admin-solicitudes.component';
import { AdminParametrosComponent } from './components/admin-parametros/admin-parametros.component';

const routes: Routes = [
  {
    path: '', component: UserBaseComponent,
    children: [
      {path: '', redirectTo: 'perfil'},
      {path: 'no-favoritos', component: NoFavoritosComponent},
      {path: 'propiedades', component: UserPropiedadesComponent},
      {path: 'perfil', component: UserPerfilComponent},
      {path: 'admin', component: AdminComponent,
        children: [
          {path: '', redirectTo: 'solicitudes'},
          {path: 'usuarios', component: AdminUsersComponent},
          {path: 'solicitudes', component: AdminSolicitudesComponent},
          {path: 'parametros', component: AdminParametrosComponent},
        ]
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
