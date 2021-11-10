import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const allowedRoles = next.data.allowedRoles;
      return this.auth.usuario.pipe(
        take(1),
        map(usuario => {
          const isAuth = !!usuario;
          if(isAuth) {
            let rolesUser = usuario.roles;
            if(allowedRoles.some((r:string)=> rolesUser.includes(r))) {
              return true;
            }
            else {
              return this.router.createUrlTree(['/auth']);
            }
          }
        })
      )
  }

}
