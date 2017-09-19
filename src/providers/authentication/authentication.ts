import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from "rxjs/Subscription"
import 'rxjs/add/operator/takeUntil';

import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationProvider {

  private subscriptions: Subscription[] = [];

  constructor(public angularfireAuth: AngularFireAuth,
    public db: AngularFireDatabase) {
  }

  // public getUser() {
  //   return new Promise((resolve, reject) => {
  //     this.angularfireAuth.authState.take(1).subscribe(user => {
  //       if (user) {
  //         this.subscriptions.push(this.db.object('/usersThirsty/' + user.uid).subscribe(data => {
  //           resolve(data)
  //         }));
  //       }
  //       else
  //         resolve(null)
  //     })
  //   });

  // }

  public redirectIfNotLoggedIn(navCtrl: NavController): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.isLoggedIn().then(loggedIn => {
        if (loggedIn) {
          resolve(true)
        } else {
          navCtrl.setRoot("LoginPage")
          resolve(false)
        }
      });
    });
  }


  public isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.angularfireAuth.authState.subscribe(user => {
        if (user)
          resolve(true)
        else
          resolve(false)
      })
    });
  }

  public loginWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.angularfireAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    });
  }


  public createUserWithEmailAndPassword(business: string, email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.angularfireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        this.loginWithEmail(email, password).then(user => {
          let userRef = this.db.object('/usersThirsty/' + user.uid);
          userRef.set({
            business: business,
            email: email,
            uid: user.uid
          });
          resolve(user);
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  public logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dispose();
      this.angularfireAuth.auth.signOut().then(() => {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  dispose() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
