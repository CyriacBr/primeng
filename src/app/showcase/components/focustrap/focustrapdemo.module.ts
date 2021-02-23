import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '@cyriacbr/primeng/dialog';
import { InputTextModule } from '@cyriacbr/primeng/inputtext';
import { ButtonModule } from '@cyriacbr/primeng/button';
import { AccordionModule } from '@cyriacbr/primeng/accordion';
import { TabViewModule } from '@cyriacbr/primeng/tabview';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';
import { FocusTrapDemo } from './focustrapdemo';
import { AutoCompleteModule } from '@cyriacbr/primeng/autocomplete';
import { CalendarModule } from '@cyriacbr/primeng/calendar';
import { MultiSelectModule } from '@cyriacbr/primeng/multiselect';
import { DropdownModule } from '@cyriacbr/primeng/dropdown';
import { EditorModule } from '@cyriacbr/primeng/editor';
import { FocusTrapModule } from '@cyriacbr/primeng/focustrap';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FocusTrapDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        AppCodeModule,
        FocusTrapModule,
		AutoCompleteModule,
		CalendarModule,
		MultiSelectModule,
		DropdownModule,
		EditorModule
	],
	declarations: [
		FocusTrapDemo
	]
})
export class FocusTrapDemoModule {}
