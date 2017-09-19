import { User } from './../providers/user';
import { Loader } from './../providers/loader';
import { ENVIRONMENT } from './../environments/environment.default';
import { AuthenticatorService } from './../providers/authenticator';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastProvider } from '../providers/toast/toast';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AlertProvider } from '../providers/alert/alert';
import { BusinessLocationProvider } from '../providers/business-location/business-location';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { GoogleLocationsProvider } from '../providers/google-locations/google-locations';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { Network } from '@ionic-native/network';

// import {} from '../providers/AuthenticatorService'

@NgModule({
  declarations: [
    MyApp,
    // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      // platforms: {
      //   ios: {
      //     menuType: 'overlay',
      //   }
      // }
    }),
    AngularFireModule.initializeApp(ENVIRONMENT.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
  ],
  providers: [
    AuthenticatorService,
    StatusBar,
    SplashScreen,
    Loader,
    // User,   
     Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    AuthenticationProvider,
    AlertProvider,
    BusinessLocationProvider,
    FirebaseProvider,
    GoogleLocationsProvider,
    ConnectivityServiceProvider,
  ]
})
export class AppModule {}
