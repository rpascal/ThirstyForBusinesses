import { Loader } from './../../providers/loader';
import { AlertProvider } from './../../providers/alert/alert';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Content) content: Content;
  public loggedIn: boolean = false;

  user: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AuthenticationProvider: AuthenticationProvider,
    public alert: AlertProvider,
    public Loader: Loader) {
  }

  ionViewWillEnter() {
    this.AuthenticationProvider.redirectIfNotLoggedIn(this.navCtrl).then(loggedIn => {
      this.loggedIn = loggedIn;
      this.content.resize();
    })
  }

  ionViewDidLoad() {
    this.AuthenticationProvider.getUser().then(user => {
      this.user = user;
    })

  }


  logout() {
    this.alert.showConfirm("Confirm Logout", "Are you sure?", "Cancel", "Logout").then(confirm => {
      if (confirm) {
        // this.Loader.showSpinner();
        this.AuthenticationProvider.logout().then(() => {
          // this.Loader.hide();
          this.navCtrl.setRoot('LoginPage');
        });
      }
    });

  }

}
