import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IConfig } from '../../models/IConfig';
import { IColumn } from '../../models/IColumn';
import { SanitizerService, StyleService } from '../../services';
import { SafeStyle } from '@angular/platform-browser';
import { CheckboxComponent } from '../../checkbox/components/checkbox/checkbox.component';
import { ICheckboxModel } from '../../checkbox/models/ICheckbox';
import { HoverHighlightDirective } from '../../directives/hover-highlight/hover-highlight.directive';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, HoverHighlightDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements AfterViewInit {
  @ViewChild('selectAll') selectAll: CheckboxComponent;
  @ContentChild('caption') caption: TemplateRef<any>;
  @ContentChild('footer') footer: TemplateRef<any>;

  _tableContainerHeight: SafeStyle =
    this.sanitizer.bypassSecurityTrustStyle('calc(100%)');

  _config: IConfig;
  @Input() set config(value: IConfig) {
    this._config = value;
  }

  _columns: IColumn[] = [];
  @Input() set columns(value: any[]) {
    this._columns = value;
  }

  _data: any[] = [];
  @Input() set data(value: any[]) {
    this._data = value;
    this._config.multiSelect && this.generateCheckboxData();
  }

  @Output() onChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() onRowSelect: EventEmitter<any> = new EventEmitter<any>();

  selectedRow: any;

  constructor(
    private readonly sanitizer: SanitizerService,
    private readonly styleService: StyleService
  ) {}

  ngAfterViewInit(): void {
    const val: number = [this.caption, this.footer].filter((a) => !!a).length;
    this._tableContainerHeight =
      this.styleService.calculateTableContainerHeight(val);
  }

  selectRow = (row: any) => {
    if (!this._config.rowSelection) {
      return;
    }
    this.selectedRow = row;
    const { checked, ...data } = row;
    this.onRowSelect.emit(data);
  };

  background = (index: number, rowId: any) => {
    const isSelected: boolean = rowId === this.selectedRow?.id;
    return this.styleService.background(this._config, index, isSelected);
  };

  filterChecked = (data: any[]) => {
    return data.filter((d) => d.checked);
  };

  removeChecked = (data: any[]) => {
    return data.map((d) => {
      const { checked, ...data } = d;
      return data;
    });
  };

  prepareCheckboxDataForSend = () => {
    const checkBoxData: any[] = this.removeChecked(this.filterChecked(structuredClone(this._data)));
    this.onChange.emit(checkBoxData);
  };

  generateCheckboxData = () => {
    this._data = this._data.map((data) => {
      const d = {
        checked: false,
        ...data,
      };
      return d;
    });
  };

  onChangeAll(event: boolean) {
    if (!this._config.multiSelect) {
      return;
    }
    this._data.forEach((item) => (item.checked = event));
    this.prepareCheckboxDataForSend();
  }

  onChangeOne(checkBoxModel: ICheckboxModel) {
    if (!this._config.multiSelect) {
      return;
    }
    if (checkBoxModel.checked) {
      this.selectAll.selectedAll = this._data.every((d) => d.checked);
    } else {
      this.selectAll.selectedAll = false;
    }
    this.prepareCheckboxDataForSend();
  }
}
