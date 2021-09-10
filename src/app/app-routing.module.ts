import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoginComponent } from './auth-module/components/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PropiedadComponent } from './propiedad/propiedad.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'propiedad', component: PropiedadComponent },

  {
    path: 'auth',
    loadChildren: () => import("./auth-module/auth.module").then(m => m.AuthModule)
  },

  {
    path: 'dashboard/:id',
    loadChildren: () => import("./user-module/user.module").then(m => m.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
