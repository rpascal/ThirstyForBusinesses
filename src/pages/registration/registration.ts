import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {


  public profileForm: FormGroup;
  public signupForm: FormGroup;
  
  public nameValidator: ValidatorFn = Validators.compose([
    Validators.required
  ]);
  public emailValidator: ValidatorFn = Validators.compose([
    Validators.required,
    Validators.email
  ]);
  public passwordValidator: ValidatorFn = Validators.compose([
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    ) {

      this.signupForm = formBuilder.group({
        email: ['', this.emailValidator],
        password: ['', this.passwordValidator],
        confirmPassword: ['', this.passwordValidator]
      });
    this.profileForm = this.formBuilder.group({
      firstName: ['', this.nameValidator],
      lastName: ['', this.nameValidator],
      email: ['', this.emailValidator]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
