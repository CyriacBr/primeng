import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputGroupDemo} from './inputgroupdemo';
import {InputGroupDemoRoutingModule} from './inputgroupdemo-routing.module';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';
import {CheckboxModule} from '@cyriacbr/primeng/checkbox';
import {RadioButtonModule} from '@cyriacbr/primeng/radiobutton';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {RippleModule} from '@cyriacbr/primeng/ripple';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		InputGroupDemoRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        RippleModule,
        TabViewModule,
        AppInputStyleSwitchModule,
        AppCodeModule
	],
	declarations: [
		InputGroupDemo
	]
})
export class InputGroupDemoModule {}
