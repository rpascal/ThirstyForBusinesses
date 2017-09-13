import { AlertController, Alert } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AlertProvider {

  private alert: Alert;
  
    constructor(private alertCtrl: AlertController) {
      console.log("Initializing Alert Provider");
    }
  
    public showAlert(title: string, subTitle: string, button: string): Promise<any> {
      return new Promise(resolve => {
        this.alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          buttons: [{
            text: button,
            role: 'cancel',
            handler: () => {
              resolve();
            }
          }]
        });
        this.alert.present();
      });
    }
  
    public showConfirm(title: string, subTitle: string, cancelButton: string, okButton: string): Promise<boolean> {
      return new Promise(resolve => {
        this.alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          buttons: [
            {
              text: cancelButton,
              role: 'cancel',
              handler: () => {
                resolve(false);
              },
            },
            {
              text: okButton,
              handler: () => {
                resolve(true);
              },
            }]
        });
        this.alert.present();
      });
    }
}
