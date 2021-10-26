import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Inmueble } from 'src/app/models/inmueble.model';
import { User } from 'src/app/models/user.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil-agente',
  templateUrl: './perfil-agente.component.html',
  styleUrls: ['./perfil-agente.component.scss']
})
export class PerfilAgenteComponent implements OnInit {
  isLoading = false;
  uidAgente: string;
  profileUrl: Observable<any>;
  usuario: User;
  inmuebles: Inmueble[];
  faBed = faBed;
  faBath = faBath;
  faRuler = faRuler;
  faCar = faCar;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private storage: AngularFireStorage,
              private inmueblesService: InmueblesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.uidAgente = this.route.snapshot.params['id'];
    this.usersService.getUser(this.uidAgente).subscribe(res => {
      this.usuario = res;
      const ref  = this.storage.ref(this.usuario.profilePicUrl)
      this.profileUrl = ref.getDownloadURL();
      this.isLoading = false;
    })
    this.inmueblesService.getInmueblesAgent(this.uidAgente).subscribe(res => {
      this.inmuebles = res;
    })

  }

}
