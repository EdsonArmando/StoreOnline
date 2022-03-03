import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeOnline';
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage) {
  }

}
