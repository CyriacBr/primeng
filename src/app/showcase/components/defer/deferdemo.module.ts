import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferDemo} from './deferdemo';
import {DeferDemoRoutingModule} from './deferdemo-routing.module';
import {DeferModule} from '@cyriacbr/primeng/defer';
import {TableModule} from '@cyriacbr/primeng/table';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		DeferDemoRoutingModule,
        DeferModule,
        ToastModule,
        TabViewModule,
        TableModule,
        AppCodeModule
	],
	declarations: [
		DeferDemo
	]
})
export class DeferDemoModule {}
