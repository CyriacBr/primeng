import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollTopDemo} from './scrolltopdemo';
import {ScrollTopDemoRoutingModule} from './scrolltopdemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {TableModule} from '@cyriacbr/primeng/table';
import {ScrollTopModule} from '@cyriacbr/primeng/scrolltop';
import {ScrollPanelModule} from '@cyriacbr/primeng/scrollpanel';

@NgModule({
	imports: [
		CommonModule,
		ScrollTopDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		ScrollTopModule,
		ScrollPanelModule,
		TableModule,
		AppCodeModule
	],
	declarations: [
		ScrollTopDemo
	]
})
export class ScrollTopDemoModule {}
