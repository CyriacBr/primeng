import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadDemo} from './fileuploaddemo';
import {FileUploadDemoRoutingModule} from './fileuploaddemo-routing.module';
import {FileUploadModule} from '@cyriacbr/primeng/fileupload';
import {ToastModule} from '@cyriacbr/primeng/toast';
import {ButtonModule} from '@cyriacbr/primeng/button';
import {TabViewModule} from '@cyriacbr/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FileUploadDemoRoutingModule,
        FileUploadModule,
        ToastModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		FileUploadDemo
	]
})
export class FileUploadDemoModule {}
