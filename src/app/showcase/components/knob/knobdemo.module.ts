import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KnobDemo} from './knobdemo';
import {KnobDemoRoutingModule} from './knobdemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {KnobModule} from '@cyriacbr/primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		KnobDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		FormsModule,
		KnobModule,
		AppCodeModule
	],
	declarations: [
		KnobDemo
	]
})
export class KnobDemoModule {}
