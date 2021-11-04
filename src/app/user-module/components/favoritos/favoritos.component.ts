import { Component, OnInit } from '@angular/core';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons';
import { Inmueble } from 'src/app/models/inmueble.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  usuario: User;
  isLoading: boolean = false;
  favoritos: Inmueble[] = [];

  constructor(private authService: AuthService, private inmueblesService: InmueblesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario;
      this.inmueblesService.getInmuebles().subscribe(res => {
        this.favoritos = res.filter(inmueble => usuario.favoritos.includes(inmueble.id))
        this.isLoading = false;
      });
    })
  }

  printFavs() {
    console.log(this.favoritos)
  }

}
