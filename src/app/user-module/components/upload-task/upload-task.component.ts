import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  @Output() urlEvent = new EventEmitter<String>();
  @Output() removeUrl = new EventEmitter<String>();

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  eliminada: boolean = false;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.startUpload();
  }

  startUpload() {
    const path = `imagenesInmuebles/${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async() => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.db.collection('files').add({downloadURL: this.downloadURL, path});
        this.sendUrl(this.downloadURL);
      })
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running'
    && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  sendUrl(url: string) {
    this.urlEvent.emit(url);
  }

  onEliminarImg(url:string) {
    this.removeUrl.emit(url)
    this.eliminada = true;
    // this.snapshot = null;
  }

}
