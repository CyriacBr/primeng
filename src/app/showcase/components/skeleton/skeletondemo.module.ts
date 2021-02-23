import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonDemo} from './skeletondemo';
import {SkeletonDemoRoutingModule} from './skeletondemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {SkeletonModule} from '@cyriacbr/primeng/skeleton';
import {TableModule} from '@cyriacbr/primeng/table';

@NgModule({
	imports: [
		CommonModule,
		SkeletonDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		SkeletonModule,
		TableModule,
		AppCodeModule
	],
	declarations: [
		SkeletonDemo
	]
})
export class SkeletonDemoModule {}
