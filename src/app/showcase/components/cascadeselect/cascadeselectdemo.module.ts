import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CascadeSelectDemo} from './cascadeselectdemo';
import {CascadeSelectDemoRoutingModule} from './cascadeselectdemo-routing.module';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {CascadeSelectModule} from '@cyriacbr/primeng/cascadeselect';
import {FormsModule} from '@angular/forms';
import { AppInputStyleSwitchModule } from '../../app.inputstyleswitch.component';

@NgModule({
	imports: [
		CommonModule,
		CascadeSelectDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		CascadeSelectModule,
		FormsModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		CascadeSelectDemo
	]
})
export class CascadeSelectDemoModule {}
