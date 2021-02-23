import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogDemo} from './dialogdemo';
import {DialogDemoRoutingModule} from './dialogdemo-routing.module';
import {DialogModule} from '@cyriacbr/primeng/dialog';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		DialogDemoRoutingModule,
        DialogModule,
		ButtonModule,
		AppCodeModule,
        TabViewModule
	],
	declarations: [
		DialogDemo
	]
})
export class DialogDemoModule {}
