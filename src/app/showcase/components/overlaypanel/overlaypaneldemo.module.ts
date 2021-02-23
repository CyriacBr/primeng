import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayPanelDemo} from './overlaypaneldemo';
import {OverlayPanelDemoRoutingModule} from './overlaypaneldemo-routing.module';
import {OverlayPanelModule} from '@cyriacbr/primeng/overlaypanel';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TableModule} from '@cyriacbr/primeng/table';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		OverlayPanelDemoRoutingModule,
        OverlayPanelModule,
        ButtonModule,
        TableModule,
		TabViewModule,
		AppCodeModule,
		ToastModule
	],
	declarations: [
		OverlayPanelDemo
	]
})
export class OverlayPanelDemoModule {}
