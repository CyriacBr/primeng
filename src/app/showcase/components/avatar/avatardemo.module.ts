import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarDemo} from './avatardemo';
import {AvatarDemoRoutingModule} from './avatardemo-routing.module';
import {AccordionModule} from '@cyriacbr/primeng/accordion';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {ToastModule} from '@cyriacbr/primeng/toast';
import { AvatarModule } from '@cyriacbr/primeng/avatar';
import { AvatarGroupModule } from '@cyriacbr/primeng/avatargroup';
import { BadgeModule } from '@cyriacbr/primeng/badge';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		AvatarDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
		ToastModule,
		AvatarModule,
		AvatarGroupModule,
		BadgeModule,
		AppCodeModule
	],
	declarations: [
		AvatarDemo
	]
})
export class AvatarDemoModule {}
