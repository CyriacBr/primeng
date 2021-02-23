import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineDemo} from './timelinedemo';
import {TimelineDemoRoutingModule} from './timelinedemo-routing.module';
import {TimelineModule} from '@cyriacbr/primeng/timeline';
import {CardModule} from '@cyriacbr/primeng/card';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {SplitButtonModule} from '@cyriacbr/primeng/splitbutton';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		TimelineDemoRoutingModule,
		TimelineModule,
		CardModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		TimelineDemo
	]
})
export class TimelineDemoModule {}
