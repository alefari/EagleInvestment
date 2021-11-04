import { Component, Input, OnInit } from '@angular/core';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons';
import { Inmueble } from 'src/app/models/inmueble.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() inmueble: Inmueble;
  @Input() i: number;
  faBed = faBed;
  faBath = faBath;
  faRuler = faRuler;
  faCar = faCar;
  usuario: User;

  constructor(private authService: AuthService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario
    })
  }

  toggleFavoritos(idInmueble) {
    if (this.usuario.favoritos.includes(idInmueble)) {
      const index = this.usuario.favoritos.indexOf(idInmueble)
      if(index > -1) {
        this.usuario.favoritos.splice(index, 1);
      }
    }
    else {
      this.usuario.favoritos.push(idInmueble);
    }
    this.usersService.updateUser(this.usuario)
  }

}
