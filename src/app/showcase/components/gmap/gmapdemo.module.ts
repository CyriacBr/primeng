import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GMapDemo} from './gmapdemo';
import {GMapDemoRoutingModule} from './gmapdemo-routing.module';
import {GMapModule} from '@cyriacbr/primeng/gmap';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {CheckboxModule} from '@cyriacbr/primeng/checkbox';
import {DialogModule} from '@cyriacbr/primeng/dialog';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		GMapDemoRoutingModule,
        GMapModule,
        ToastModule,
        InputTextModule,
        CheckboxModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		GMapDemo
	]
})
export class GMapDemoModule {}
