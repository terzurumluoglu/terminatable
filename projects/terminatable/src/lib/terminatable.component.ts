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
import { CheckboxComponent } from './checkbox/components';
import { HoverHighlightDirective } from './directives';
import { SafeStyle } from '@angular/platform-browser';
import { IColumn, IConfig } from './models';
import { TerminatableService } from './terminatable.service';
import { ICheckboxModel } from './checkbox/models';
import { CONFIG } from './constants/config';

@Component({
  selector: 'terminatable',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, HoverHighlightDirective],
  templateUrl: './terminatable.component.html',
  styleUrl: './terminatable.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TerminatableComponent implements AfterViewInit {
  @ViewChild('selectAll') selectAll: CheckboxComponent;
  @ContentChild('caption') caption: TemplateRef<any>;
  @ContentChild('footer') footer: TemplateRef<any>;

  _tableContainerHeight: SafeStyle =
    this.service.bypassSecurityTrustStyle('calc(100%)');

  _config: IConfig = CONFIG;
  @Input() set config(value: IConfig) {
    value = { ...CONFIG, ...value };
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

  constructor(private readonly service: TerminatableService) {}

  ngAfterViewInit(): void {
    const val: number = [this.caption, this.footer].filter((a) => !!a).length;
    this._tableContainerHeight =
      this.service.calculateTableContainerHeight(val);
  }

  selectRow = (row: any) => {
    if (!this._config.rowSelection) {
      return;
    }
    this.selectedRow = row;
    const { checked, ...data } = row;
    this.onRowSelect.emit(data);
  };

  background = (index: number, row: any) => {
    const isSelected: boolean = this.isSelectedRow(row)
    return this.service.background(this._config, index, isSelected);
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
    const checkBoxData: any[] = this.removeChecked(
      this.filterChecked(structuredClone(this._data))
    );
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

  hoverHighlightInput = (row: any, index: number) => {
    const selected: boolean = this.isSelectedRow(row);
    return {config: this._config, index, selected };
  }

  isSelectedRow = (row: any) => {
    return !!this.selectedRow ? row[this._config.uniqueField] === this.selectedRow[this._config.uniqueField] : false;
  }
}
