import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from 'src/app/models/inmueble.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { faBed, faBath, faRuler, faCar, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

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
  constructor(private route: ActivatedRoute, private inmueblesService: InmueblesService) { }

  ngOnInit(): void {
    this.idInmueble = this.route.snapshot.params['id'];
    this.inmueblesService.getInmueble(this.idInmueble).subscribe(inmueble => {
      this.inmueble = {...inmueble};
    })
  }

}
