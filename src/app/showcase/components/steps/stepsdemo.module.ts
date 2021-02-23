import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule } from '@cyriacbr/primeng/steps';
import { TabViewModule } from '@cyriacbr/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { SeatDemo } from './seatdemo';
import { ConfirmationDemo } from './confirmationdemo';
import { PersonalDemo } from './personaldemo';
import { PaymentDemo } from './paymentdemo';
import { ButtonModule } from '@cyriacbr/primeng/button';
import { CardModule } from '@cyriacbr/primeng/card';
import { DropdownModule } from '@cyriacbr/primeng/dropdown';
import { InputTextModule } from '@cyriacbr/primeng/inputtext';
import { InputMaskModule } from '@cyriacbr/primeng/inputmask';
import { CheckboxModule } from '@cyriacbr/primeng/checkbox';
import { ToastModule } from '@cyriacbr/primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService } from './ticketservice';

@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
		ToastModule,
		FormsModule
	],
	declarations: [
		StepsDemo,
		SeatDemo,
		ConfirmationDemo,
		PersonalDemo,
		PaymentDemo
	],
	providers: [
		TicketService
	]
})
export class StepsDemoModule {}
