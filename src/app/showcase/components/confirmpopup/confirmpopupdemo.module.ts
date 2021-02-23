import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmPopupDemo} from './confirmpopupdemo';
import {ConfirmPopupDemoRoutingModule} from './confirmpopupdemo-routing.module';
import {ConfirmPopupModule} from '@cyriacbr/primeng/confirmpopup';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {MessagesModule} from '@cyriacbr/primeng/messages';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ConfirmPopupDemoRoutingModule,
        ConfirmPopupModule,
        ButtonModule,
		MessagesModule,
		ToastModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		ConfirmPopupDemo
	]
})
export class ConfirmPopupDemoModule {}
