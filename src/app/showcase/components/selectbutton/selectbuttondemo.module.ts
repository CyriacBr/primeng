import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SelectButtonDemo} from './selectbuttondemo';
import {SelectButtonDemoRoutingModule} from './selectbuttondemo-routing.module';
import {SelectButtonModule} from '@cyriacbr/primeng/selectbutton';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		SelectButtonDemoRoutingModule,
        FormsModule,
        SelectButtonModule,
        ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		SelectButtonDemo
	]
})
export class SelectButtonDemoModule {}
