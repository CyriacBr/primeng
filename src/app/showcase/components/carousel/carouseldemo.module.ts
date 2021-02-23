import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselDemo} from './carouseldemo';
import {CarouselDemoRoutingModule} from './carouseldemo-routing.module';
import {CarouselModule} from '@cyriacbr/primeng/carousel';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        CarouselDemoRoutingModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		CarouselDemo
	]
})
export class CarouselDemoModule {}
