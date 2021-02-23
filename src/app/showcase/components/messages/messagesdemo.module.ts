import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import {MessagesModule} from '@cyriacbr/primeng/messages';
import {MessageModule} from '@cyriacbr/primeng/message';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {RippleModule} from '@cyriacbr/primeng/ripple';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,
        ButtonModule,
        InputTextModule,
        TabViewModule,
        RippleModule,
        AppCodeModule
	],
	declarations: [
		MessagesDemo
	]
})
export class MessagesDemoModule {}
