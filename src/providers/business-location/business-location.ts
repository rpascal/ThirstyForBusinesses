import { FirebaseProvider } from './../firebase/firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BusinessLocationProvider {

  constructor(public firebase: FirebaseProvider) {
  }





}
