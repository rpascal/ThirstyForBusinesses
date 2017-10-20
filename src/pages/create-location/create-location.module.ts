// import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateLocationPage } from './create-location';

@NgModule({
  declarations: [
    CreateLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateLocationPage)
  ],
  entryComponents:[
  ],
  
})
export class CreateLocationPageModule {}
