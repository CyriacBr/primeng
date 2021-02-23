import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickListDemo} from './picklistdemo';
import {PickListDemoRoutingModule} from './picklistdemo-routing.module';
import {PickListModule} from '@cyriacbr/primeng/picklist';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PickListDemoRoutingModule,
        PickListModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		PickListDemo
	]
})
export class PickListDemoModule {}
