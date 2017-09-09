import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import {ENVIRONMENT} from "../../environments/environment.default"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public t;




  constructor(private platform: Platform,
    public navCtrl: NavController) {
    console.log(ENVIRONMENT.environment)
    this.t = ENVIRONMENT.environment;
  }
  ionViewWillEnter() {
    this.platform.ready().then(() => {
      this.navCtrl.setRoot('RegistrationPage');      
    });
  }



}
