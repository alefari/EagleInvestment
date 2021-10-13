import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  backgroundImageUrl: Observable<string | null>

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('caracas.jpg');
    this.backgroundImageUrl = ref.getDownloadURL();
   }

  ngOnInit(): void {

  }

  scroll(elId: string) {
    let el = document.getElementById(elId)
    const y = el.getBoundingClientRect().top + window.pageYOffset + -77;
    window.scrollTo({top: y, behavior: 'smooth'});
    // el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // el.scrollIntoView(false);

  }

}
