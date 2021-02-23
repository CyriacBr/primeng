import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividerDemo} from './dividerdemo';
import {TagDemoRoutingModule} from './dividerdemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {DividerModule} from '@cyriacbr/primeng/divider';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';

@NgModule({
	imports: [
		CommonModule,
		TagDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		DividerModule,
		InputTextModule,
		AppCodeModule
	],
	declarations: [
		DividerDemo
	]
})
export class DividerDemoModule {}
