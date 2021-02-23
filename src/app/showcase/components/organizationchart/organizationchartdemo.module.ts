import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationChartDemo} from './organizationchartdemo';
import {OrganizationChartDemoRoutingModule} from './organizationchartdemo-routing.module';
import {OrganizationChartModule} from '@cyriacbr/primeng/organizationchart';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		OrganizationChartDemoRoutingModule,
        OrganizationChartModule,
        ToastModule,
        PanelModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		OrganizationChartDemo
	]
})
export class OrganizationChartDemoModule {}
