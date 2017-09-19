import { AlertProvider } from './../providers/alert/alert';
import { AuthenticationProvider } from './../providers/authentication/authentication';
import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage"

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public AuthenticationProvider: AuthenticationProvider,
    public alert: AlertProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  logout() {
    this.alert.showConfirm("Confirm Logout", "Are you sure?", "Cancel", "Logout").then(confirm => {
      if (confirm) {
        // this.Loader.showSpinner();
        this.AuthenticationProvider.logout().then(() => {
          // this.Loader.hide();
          this.nav.setRoot('LoginPage');
        });
      }
    });

  }



}

