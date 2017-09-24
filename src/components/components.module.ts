import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { DayHoursComponent } from './day-hours/day-hours';
@NgModule({
	declarations: [DayHoursComponent],
	imports: [],
	exports: [DayHoursComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
