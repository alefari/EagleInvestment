import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FormsModule } from '@angular/forms';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminSolicitudesComponent } from './components/admin-solicitudes/admin-solicitudes.component';
import { AdminParametrosComponent } from './components/admin-parametros/admin-parametros.component';
import { AgregarInmuebleComponent } from './components/agregar-inmueble/agregar-inmueble.component';
import { AgentComponent } from './components/agent/agent.component';
import { AgentPropiedadesComponent } from './components/user-propiedades/agent-propiedades.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { EditarInmuebleComponent } from './components/editar-inmueble/editar-inmueble.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    UserBaseComponent,
    UserPerfilComponent,
    AdminComponent,
    FavoritosComponent,
    AdminUsersComponent,
    AdminSolicitudesComponent,
    AdminParametrosComponent,
    AgregarInmuebleComponent,
    AgentComponent,
    AgentPropiedadesComponent,
    DropzoneDirective,
    UploadTaskComponent,
    EditarInmuebleComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class UserModule { }
