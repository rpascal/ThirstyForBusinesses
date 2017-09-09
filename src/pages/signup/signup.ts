import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastOptions } from 'ionic-angular';
import { Validators, FormBuilder, ValidatorFn, FormGroup } from '@angular/forms';
import { AlertController, AlertOptions, ToastController } from 'ionic-angular';
import { Events } from "ionic-angular";
import { Loader } from '../../providers/loader';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['LoginPage']
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signUpForm: any

  public emailValidator: ValidatorFn = Validators.compose([
    Validators.required,
    Validators.email
  ]);
  public passwordValidator: ValidatorFn = Validators.compose([
    Validators.required,
    Validators.minLength(6)
  ]);


  constructor(
    private events: Events,
    public ToastController: ToastController,
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private loader: Loader,
    private alertCtrl: AlertController
  ) { }

  ionViewWillLoad() {
    // Validate user registration form
    this.signUpForm = this.formBuilder.group({
      business: ['', Validators.required],
      email: ['', this.emailValidator],
      password: ['', this.passwordValidator],
      passwordConfirmation: ['', this.passwordValidator]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirmation.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  // Create user using form builder controls
  createUser() {
    var options: ToastOptions = {
      message: "create user",
      duration: 3000
    }
    this.ToastController.create(options).present()

    // let fullName = this.user.controls.fullName.value;
    // let email = this.user.controls.email.value;
    // let password = this.user.controls.password.value;
    // let passwordConfirmation = this.user.controls.passwordConfirmation.value;
    // this.loader.show("Creating user...");
    // new Promise((resolve, reject) => {
    //   if (passwordConfirmation != password) {
    //     reject(new Error('Password does not match'));
    //   } else {
    //     resolve();
    //   }
    // })
    //   .then(() => {
    //     return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    //   })
    //   .then((user: any) => {
    //     this.events.publish('user:create', user);
    //     // Login if successfuly creates a user
    //     return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    //   })
    //   .then((user: any) => {
    //     // CUSTOMISE: Here you can add more fields to your user registration
    //     // those fields will be stored on /users/{uid}/
    //     let userRef = this.db.object('/users/' + user.uid);
    //     userRef.set({
    //       provider: user.providerId,
    //       email: email,
    //       fullName: fullName
    //     });
    //     this.loader.hide();
    //   })
    //   .catch((e) => {
    //     this.loader.hide();
    //     this.alertCtrl.create({
    //       title: 'Error',
    //       message: `Failed to login. ${e.message}`,
    //       buttons: [{ text: 'Ok' }]
    //     }).present();
    //   });
  }

}
