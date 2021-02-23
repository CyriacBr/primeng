import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeDemo} from './badgedemo';
import {BadgeDemoRoutingModule} from './badgedemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import { BadgeModule } from '@cyriacbr/primeng/badge';

@NgModule({
	imports: [
		CommonModule,
		BadgeDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		BadgeModule,
        AppCodeModule
	],
	declarations: [
		BadgeDemo
	]
})
export class BadgeDemoModule {}
