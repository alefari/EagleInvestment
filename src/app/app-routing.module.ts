import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PropiedadComponent } from './components/propiedad/propiedad.component';
import { ReclutamientoComponent } from './components/reclutamiento/reclutamiento.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: MainMenuComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'propiedad', component: PropiedadComponent },
  { path: 'reclutamiento', component: ReclutamientoComponent },
  { path: '404', component: NotFoundComponent },

  {
    path: 'auth',
    loadChildren: () => import("./auth-module/auth.module").then(m => m.AuthModule)
  },

  {
    path: 'dashboard/:id',
    loadChildren: () => import("./user-module/user.module").then(m => m.UserModule)
  },

  {
    path: 'contacto',
    loadChildren: () => import("./contacto-module/contacto.module").then(m => m.ContactoModule)
  },

  { path: '**', redirectTo: '404' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
