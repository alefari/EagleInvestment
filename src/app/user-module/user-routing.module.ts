import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentPropiedadesComponent } from './components/user-propiedades/agent-propiedades.component';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { NoFavoritosComponent } from './components/no-favoritos/no-favoritos.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminSolicitudesComponent } from './components/admin-solicitudes/admin-solicitudes.component';
import { AdminParametrosComponent } from './components/admin-parametros/admin-parametros.component';
import { AgentComponent } from './components/agent/agent.component';
import { AgregarInmuebleComponent } from './components/agregar-inmueble/agregar-inmueble.component';
import { EditarInmuebleComponent } from './components/editar-inmueble/editar-inmueble.component';

const routes: Routes = [
  {
    path: '', component: UserBaseComponent,
    children: [
      {path: '', redirectTo: 'perfil'},
      {path: 'no-favoritos', component: NoFavoritosComponent},
      {path: 'perfil', component: UserPerfilComponent},

      {path: 'admin', component: AdminComponent,
        children: [
          {path: '', redirectTo: 'solicitudes'},
          {path: 'usuarios', component: AdminUsersComponent},
          {path: 'solicitudes', component: AdminSolicitudesComponent},
          {path: 'parametros', component: AdminParametrosComponent},
        ]
      },

      {path: 'agente', component: AgentComponent,
        children: [
          {path: '', redirectTo: 'propiedades'},
          {path: 'propiedades', component: AgentPropiedadesComponent},
          {path: 'nuevo-inmueble', component: AgregarInmuebleComponent},
          {path: 'editar-inmueble/:id', component: EditarInmuebleComponent},
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
