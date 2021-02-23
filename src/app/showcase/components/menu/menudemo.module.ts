import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDemo} from './menudemo';
import {MenuDemoRoutingModule} from './menudemo-routing.module';
import {MenuModule} from '@cyriacbr/primeng/menu'
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {ToastModule} from '@cyriacbr/primeng/toast';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MenuDemoRoutingModule,
        MenuModule,
        ButtonModule,
		TabViewModule,
		ToastModule,
		AppCodeModule
	],
	declarations: [
		MenuDemo
	]
})
export class MenuDemoModule {}
