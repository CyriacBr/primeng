import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDemo} from './tooltipdemo';
import {TooltipDemoRoutingModule} from './tooltipdemo-routing.module';
import {TooltipModule} from '@cyriacbr/primeng/tooltip';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {RippleModule} from '@cyriacbr/primeng/ripple';

@NgModule({
	imports: [
		CommonModule,
		TooltipDemoRoutingModule,
        TooltipModule,
        InputTextModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		RippleModule
	],
	declarations: [
		TooltipDemo
	]
})
export class TooltipDemoModule {}
