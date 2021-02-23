import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataViewDemo} from './dataviewdemo';
import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import {DataViewModule} from '@cyriacbr/primeng/dataview';
import {PanelModule} from '@cyriacbr/primeng/panel';
import {InputTextModule} from '@cyriacbr/primeng/inputtext';
import {RatingModule} from '@cyriacbr/primeng/rating';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {DropdownModule} from '@cyriacbr/primeng/dropdown';
import {AppCodeModule} from '../../app.code.component';
import {TabViewModule} from '@cyriacbr/primeng/tabview';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		DataViewDemoRoutingModule,
        DataViewModule,
        PanelModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        RatingModule,
        ButtonModule,
        AppCodeModule
	],
	declarations: [
		DataViewDemo
	]
})
export class DataViewDemoModule {}