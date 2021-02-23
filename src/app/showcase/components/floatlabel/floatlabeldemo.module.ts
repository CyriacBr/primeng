import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FloatLabelDemo } from './floatlabeldemo';
import { FloatLabelDemoRoutingModule } from './floatlabeldemo-routing.module';

import { ButtonModule } from '@cyriacbr/primeng/button';
import { PanelModule } from '@cyriacbr/primeng/panel';
import { TabViewModule } from '@cyriacbr/primeng/tabview';
import { InputTextModule } from '@cyriacbr/primeng/inputtext';
import { AutoCompleteModule } from '@cyriacbr/primeng/autocomplete';
import { CalendarModule } from '@cyriacbr/primeng/calendar';
import { ChipsModule } from '@cyriacbr/primeng/chips';
import { InputMaskModule } from '@cyriacbr/primeng/inputmask';
import { InputNumberModule } from '@cyriacbr/primeng/inputnumber';
import { DropdownModule } from '@cyriacbr/primeng/dropdown';
import { MultiSelectModule } from '@cyriacbr/primeng/multiselect';
import { InputTextareaModule } from '@cyriacbr/primeng/inputtextarea';
import { CascadeSelectModule } from '@cyriacbr/primeng/cascadeselect';

import { AppCodeModule } from '../../app.code.component';
import { AppInputStyleSwitchModule } from '../../app.inputstyleswitch.component';

@NgModule({
	imports: [
		CommonModule,
		FloatLabelDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		InputTextModule,
		AutoCompleteModule,
		CalendarModule,
		CascadeSelectModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		DropdownModule,
		MultiSelectModule,
		InputTextareaModule,
		FormsModule,
		AppInputStyleSwitchModule,
        AppCodeModule
	],
	declarations: [
		FloatLabelDemo
	]
})
export class FloatLabelDemoModule {}
