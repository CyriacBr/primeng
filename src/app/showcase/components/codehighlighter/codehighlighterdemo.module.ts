import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeHighlighterDemo} from './codehighlighterdemo';
import {CodeHighlighterDemoRoutingModule} from './codehighlighterdemo-routing.module';
import {CodeHighlighterModule} from '@cyriacbr/primeng/codehighlighter';
import {TabViewModule} from '@cyriacbr/primeng/tabview';

@NgModule({
	imports: [
		CommonModule,
		CodeHighlighterDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CodeHighlighterDemo
	]
})
export class CodeHighlighterDemoModule {}
