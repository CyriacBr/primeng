import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorDemo} from './paginatordemo';
import {PaginatorDemoRoutingModule} from './paginatordemo-routing.module';
import {PaginatorModule} from '@cyriacbr/primeng/paginator';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PaginatorDemoRoutingModule,
        PaginatorModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule
	],
	declarations: [
		PaginatorDemo
	]
})
export class PaginatorDemoModule {}
