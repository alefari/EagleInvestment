import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from 'src/app/models/inmueble.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { faBed, faBath, faRuler, faCar, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.scss']
})
export class InmuebleComponent implements OnInit {
  idInmueble: string;
  inmueble: Inmueble;
  faBed = faBed;
  faBath = faBath;
  faRuler = faRuler;
  faCar = faCar;
  faPencilRuler = faPencilRuler;
  isLoading: boolean = false;
  agente: User;
  usuario: User;
  profileUrl: Observable<string | null>;
  constructor(private route: ActivatedRoute,
              private inmueblesService: InmueblesService,
              private usersService: UsersService,
              private storage: AngularFireStorage,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.idInmueble = this.route.snapshot.params['id'];
    this.inmueblesService.getInmueble(this.idInmueble).subscribe(inmueble => {
      this.inmueble = {...inmueble};
      this.getUserAgente();
    })
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario
    })

  }

  getUserAgente() {
    this.usersService.getUser(this.inmueble.uidAgente).subscribe(user => {
      this.agente = user;
      const ref  = this.storage.ref(this.agente.profilePicUrl)
      this.profileUrl = ref.getDownloadURL();
      this.isLoading = false;
    })
  }

  toggleFavoritos() {
    if (this.usuario.favoritos.includes(this.idInmueble)) {
      const index = this.usuario.favoritos.indexOf(this.idInmueble)
      if(index > -1) {
        this.usuario.favoritos.splice(index, 1);
      }
    }
    else {
      this.usuario.favoritos.push(this.idInmueble);
    }
    this.usersService.updateUser(this.usuario)
  }

}
