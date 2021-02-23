import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemo } from './tabledemo';
import { TableBasicDemo } from './tablebasicdemo';
import { TableDynamicDemo } from './tabledynamicdemo';
import { TableTemplatingDemo } from './tabletemplatingdemo';
import { TableSizeDemo } from './tablesizedemo';
import { TableGridLinesDemo } from './tablegridlinesdemo';
import { TableStripedDemo } from './tablestripeddemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';
import { TableFlexScrollDemo } from './tableflexscrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from '@cyriacbr/primeng/table';
import { SliderModule } from '@cyriacbr/primeng/slider';
import { MultiSelectModule } from '@cyriacbr/primeng/multiselect';
import { ContextMenuModule } from '@cyriacbr/primeng/contextmenu';
import { ToastModule } from '@cyriacbr/primeng/toast';
import { ButtonModule } from '@cyriacbr/primeng/button';
import { CalendarModule } from '@cyriacbr/primeng/calendar';
import { DialogModule } from '@cyriacbr/primeng/dialog';
import { ConfirmDialogModule } from '@cyriacbr/primeng/confirmdialog';
import { RatingModule } from '@cyriacbr/primeng/rating';
import { DropdownModule } from '@cyriacbr/primeng/dropdown';
import { InputTextModule } from '@cyriacbr/primeng/inputtext';
import { InputNumberModule } from '@cyriacbr/primeng/inputnumber';
import { InputTextareaModule } from '@cyriacbr/primeng/inputtextarea';
import { ProgressBarModule } from '@cyriacbr/primeng/progressbar';
import { TooltipModule } from '@cyriacbr/primeng/tooltip';
import { RadioButtonModule } from '@cyriacbr/primeng/radiobutton';
import { ToolbarModule } from '@cyriacbr/primeng/toolbar';
import { FileUploadModule } from '@cyriacbr/primeng/fileupload';
import { TabViewModule } from '@cyriacbr/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableDemoRoutingModule,
        TableModule,
        CalendarModule,
		SliderModule,
        DialogModule,
        ConfirmDialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        RatingModule,
        AppCodeModule
	],
	declarations: [
		TableDemo,
		TableBasicDemo,
		TableDynamicDemo,
        TableTemplatingDemo,
        TableSizeDemo,
        TableGridLinesDemo,
        TableStripedDemo,
		TablePageDemo,
		TableSortDemo,
		TableSelectionDemo,
		TableFilterDemo,
		TableStyleDemo,
		TableLazyDemo,
		TableExportDemo,
		TableColGroupDemo,
		TableRowExpansionDemo,
        TableScrollDemo,
        TableVirtualScrollDemo,
        TableFlexScrollDemo,
		TableColToggleDemo,
		TableCrudDemo,
		TableResponsiveDemo,
		TableContextMenuDemo,
		TableColResizeDemo,
		TableReorderDemo,
		TableEditDemo,
        TableRowGroupDemo,
        TableStateDemo,
        TableStickyDemo
	]
})
export class TableDemoModule { }
