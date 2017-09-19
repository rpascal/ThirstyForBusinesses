import { Business } from './../../models/business';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public database: AngularFireDatabase, public angularfireAuth: AngularFireAuth) {
  }


  public getCurrentUser(): Promise<FirebaseObjectObservable<Business>> {
    return new Promise((resolve, reject) => {
      this.angularfireAuth.authState.take(1).subscribe(user => {
        if (user) {
          resolve(this.getObject('/usersThirsty/' + user.uid))
        }
        else
          reject()
      })
    });

  }


  public exists(query: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.database.object(query).take(1).subscribe((obj) => {
        if (obj.$exists()) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }



  public getList(query: string): FirebaseListObservable<any> {
    return this.database.list(query);
  }

  public getListQuery(query: string, filterQuery: any): FirebaseListObservable<any> {
    return this.database.list(query, {
      query: filterQuery
    });
  }

  public getObject(query: string): FirebaseObjectObservable<any> {
    return this.database.object(query);
  }

  public push(query: string, object: any): firebase.Promise<void> {
    return this.database.list(query).push(object);
  }

  public update(query: string, object: any): firebase.Promise<void> {
    return this.database.object(query).update(object);
  }
  public set(query: string, object: any) : firebase.Promise<void>{
    return this.database.object(query).set(object);
  }
  public remove(query: string) : firebase.Promise<void>{
    return this.database.object(query).remove();
  }



}
