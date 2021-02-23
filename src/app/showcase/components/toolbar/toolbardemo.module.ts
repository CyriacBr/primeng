import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import {ToolbarDemoRoutingModule} from './toolbardemo-routing.module';
import {ToolbarModule} from '@cyriacbr/primeng/toolbar';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {SplitButtonModule} from '@cyriacbr/primeng/splitbutton';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
