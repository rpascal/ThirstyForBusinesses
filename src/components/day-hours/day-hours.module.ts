import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DayHoursComponent } from './day-hours';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';


@NgModule({
	declarations: [DayHoursComponent],
	imports: [CommonModule, IonicModule],
	exports: [DayHoursComponent],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DayHoursModule { }
