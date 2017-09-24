import { DayHoursModule } from './../../../components/day-hours/day-hours.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectWeeklyHoursPage } from './select-weekly-hours';

@NgModule({
  declarations: [
    SelectWeeklyHoursPage,
  ],
  imports: [
    DayHoursModule,
    IonicPageModule.forChild(SelectWeeklyHoursPage),
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class SelectWeeklyHoursPageModule {}
