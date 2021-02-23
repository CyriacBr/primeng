import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemo} from './buttondemo';
import {ButtonDemoRoutingModule} from './buttondemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {ProgressSpinnerModule} from '@cyriacbr/primeng/progressspinner';
import {RippleModule} from '@cyriacbr/primeng/ripple';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonDemoRoutingModule,
        ButtonModule,
        TabViewModule,
		AppCodeModule,
        ProgressSpinnerModule,
        RippleModule
	],
	declarations: [
		ButtonDemo
	]
})
export class ButtonDemoModule {}
