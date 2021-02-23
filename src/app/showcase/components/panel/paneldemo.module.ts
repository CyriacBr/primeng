import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelDemo} from './paneldemo';
import {PanelDemoRoutingModule} from './paneldemo-routing.module';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {ToastModule} from '@cyriacbr/primeng/toast';
import { MenuModule } from '@cyriacbr/primeng/menu';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PanelDemoRoutingModule,
        PanelModule,
        ToastModule,
		TabViewModule,
		AppCodeModule,
		MenuModule
	],
	declarations: [
		PanelDemo
	]
})
export class PanelDemoModule {}
