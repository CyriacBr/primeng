import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagDemo} from './tagdemo';
import {TagDemoRoutingModule} from './tagdemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import { TagModule } from '@cyriacbr/primeng/tag';

@NgModule({
	imports: [
		CommonModule,
		TagDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		TagModule,
		AppCodeModule
	],
	declarations: [
		TagDemo
	]
})
export class TagDemoModule {}
