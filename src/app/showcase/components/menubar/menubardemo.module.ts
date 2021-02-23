import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarDemo} from './menubardemo';
import {MenubarDemoRoutingModule} from './menubardemo-routing.module';
import {MenubarModule} from '@cyriacbr/primeng/menubar';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MenubarDemoRoutingModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		MenubarDemo
	]
})
export class MenubarDemoModule {}
