import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDemo} from './carddemo';
import {CardDemoRoutingModule} from './carddemo-routing.module';
import {CardModule} from '@cyriacbr/primeng/card';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {ButtonModule} from '@cyriacbr/primeng/button';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		CardDemoRoutingModule,
		CardModule,
		ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		CardDemo
	]
})
export class CardDemoModule {}
