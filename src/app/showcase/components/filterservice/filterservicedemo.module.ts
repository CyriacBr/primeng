import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@cyriacbr/primeng/button';;
import { TabViewModule } from '@cyriacbr/primeng/tabview';
import { FilterServiceDemo } from './filterservicedemo';
import { FilterServiceDemoRoutingModule } from './filterservice-routing.module';
import { AutoCompleteModule } from '@cyriacbr/primeng/autocomplete';
import { TableModule } from '@cyriacbr/primeng/table';
import { InputTextModule } from '@cyriacbr/primeng/inputtext';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FilterServiceDemoRoutingModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule,
		AutoCompleteModule,
		FormsModule,
		TableModule,
		InputTextModule
	],
	declarations: [
		FilterServiceDemo
	]
})
export class FilterServiceDemoModule {}
