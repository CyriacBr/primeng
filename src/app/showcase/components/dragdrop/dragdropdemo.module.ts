import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from '@cyriacbr/primeng/dragdrop';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TableModule} from '@cyriacbr/primeng/table';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';


@NgModule({
	imports: [
		CommonModule,
		DragDropDemoRoutingModule,
        DragDropModule,
        PanelModule,
        TableModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		DragDropDemo
	]
})
export class DragDropDemoModule {}
