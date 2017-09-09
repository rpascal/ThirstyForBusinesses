import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { AuthenticatorService } from "../../providers/authenticator";
// import { RegistrationPage } from '../registration/registration';
import { AlertController, Events } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: any;


  public emailValidator: ValidatorFn = Validators.compose([
    Validators.required,
    Validators.email
  ]);
  public passwordValidator: ValidatorFn = Validators.compose([
    Validators.required,
  ]);


  constructor(
    private events: Events,
    public navCtrl: NavController,
    public ToastController: ToastController,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private platform: Platform,
    private authenticator: AuthenticatorService
  ) {
  }

  ionViewWillLoad() {
    this.loginForm = this.formBuilder.group({
      email: ['', this.emailValidator],
      password: ['', this.passwordValidator]
    });
  }

  doSomethingAfterUserLogin(user) {
    console.info('Do something after login :)');
  }

  // Anonymous user login
  anonymousUser() {
    this.ToastController.create({ message: "anonymous", duration: 2000,position:"top" }).present()
    
    // this.authenticator.anonymousUser()
    //   .then((user) => {
    //     this.doSomethingAfterUserLogin(user);
    //   })
    //   .catch((e) => {
    //     let prompt = this.alertCtrl.create({
    //       title: 'Error',
    //       message: `Failed to login ${e.message}`,
    //       buttons: [{ text: 'Ok' }]
    //     });
    //     prompt.present();
    //   });
  }

  signInWithOAuth(provider: string) {
    this.ToastController.create({ message: provider, duration: 2000,position:"top" }).present()
    
    // this.platform.is('cordova') ? this.authenticator.signInWithOAuth(provider) : this.authenticator.signInWithOAuthBrowserMode(provider)
    //   .then((user) => {
    //     this.doSomethingAfterUserLogin(user);
    //   })
    //   .catch((e) => {
    //     let prompt = this.alertCtrl.create({
    //       title: 'Error',
    //       message: `Failed to login ${e}`,
    //       buttons: [{ text: 'Ok' }]
    //     });
    //     prompt.present();
    //   });
  }

  // Perform login using user and password
  login() {

    this.ToastController.create({ message: "dummy login", duration: 2000,position:"top" }).present()

    // let email = this.userFormBuilder.controls.email.value;
    // let password = this.userFormBuilder.controls.password.value;
    // this.authenticator.login(email, password)
    //   .then((user) => {
    //     this.doSomethingAfterUserLogin(user);
    //   })
    //   .catch((e) => {
    //     this.alertCtrl.create({
    //       title: 'Error',
    //       message: `Failed to login ${e.message}`,
    //       buttons: [{ text: 'Ok' }]
    //     }).present();
    //   });
  }

  // Push registration view
  signUp() {
    this.navCtrl.push("SignupPage");
  }

  // Reset password
  resetPassword() {
    this.alertCtrl.create({
      title: 'Reset your password',
      message: "Enter your email so we can send you a link to reset your password",
      inputs: [{ type: 'email', name: 'email', placeholder: 'Email' }],
      buttons: [
        { text: 'Cancel', handler: data => { } },
        {
          text: 'Done',
          handler: data => {
            this.alertCtrl.create({
              title: 'done dummy click',
              message: 'dummy click',
              buttons: [{ text: 'Ok' }]
            }).present();
            // this.authenticator.resetPassword(data.email)
            //   .then(() => {
            //     this.alertCtrl.create({
            //       title: 'Success',
            //       message: 'Your password has been reset - Please check your email for further instructions.',
            //       buttons: [{ text: 'Ok' }]
            //     }).present();
            //   })
            //   .catch((e) => {
            //     this.alertCtrl.create({
            //       title: 'Error',
            //       message: `Failed to login ${e.message}`,
            //       buttons: [{ text: 'Ok' }]
            //     }).present();
            //   });
          }
        }
      ]
    }).present();
  }

}