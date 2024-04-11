import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { CheckboxComponent } from './checkbox/components';
import { HoverHighlightDirective } from './directives';
import { SafeStyle } from '@angular/platform-browser';
import { IColumn, IConfig } from './models';
import { TerminatableService } from './terminatable.service';
import { ICheckboxModel } from './checkbox/models';
import { CONFIG } from './constants/config';
import { IColumnStyle, IRowStyle } from './models/IStyle';
import { IDragAngDrop } from './models/IDragDrop';

@Component({
  selector: 'terminatable',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, HoverHighlightDirective],
  templateUrl: './terminatable.component.html',
  styleUrl: './terminatable.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TerminatableComponent implements AfterViewInit {
  @ViewChildren('columnDragbox') columnDragboxes: QueryList<ElementRef>;
  @ViewChildren('rowDragbox') rowDragboxes: QueryList<ElementRef>;
  @ViewChild('selectAll') selectAll: CheckboxComponent;
  @ContentChild('caption') caption: TemplateRef<any>;
  @ContentChild('footer') footer: TemplateRef<any>;
  @ContentChild('tbody') tbody: TemplateRef<any>;

  _tableContainerHeight: SafeStyle =
    this.service.bypassSecurityTrustStyle('calc(100%)');

  _config: IConfig = CONFIG;
  @Input() set config(value: IConfig) {
    value = { ...CONFIG, ...value };
    this._config = value;
    this.trStyle = {
      'background-color': value.style.header.color.background,
      'line-height': value.style.header.lineHeight,
    };
    this.thStyle = {
      left: value.multiSelect ? '3.25rem' : 0,
      'font-size': value.style.header.font.size,
      'font-weight': value.style.header.font.weight,
    };
    this.tdStyle = {
      left: value.multiSelect ? '3.25rem' : 0,
      'font-size': value.style.body.even.font.size,
      'font-weight': value.style.body.even.font.weight,
    };
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

  @Output() onColumnDrop: EventEmitter<IDragAngDrop> =
    new EventEmitter<IDragAngDrop>();
  @Output() onRowDrop: EventEmitter<IDragAngDrop> =
    new EventEmitter<IDragAngDrop>();

  selectedRow: any;

  trStyle: IRowStyle = {};
  thStyle: IColumnStyle = {};
  tdStyle: IColumnStyle = {};

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
    this.selectedRow = this.isSelectedRow(row) ? undefined : row;
    const { checked, ...data } = row;
    this.onRowSelect.emit(data);
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

  isSelectedRow = (row: any) => {
    return !!this.selectedRow
      ? row[this._config.uniqueField] ===
          this.selectedRow[this._config.uniqueField]
      : false;
  };

  //#region STYLE

  textColor(column: IColumn, index: number = -1): string {
    if (!!column?.color) {
      return column.color;
    }
    return this._config.style.body.even.color.text;
  }

  hoverHighlightInput = (row: any, index: number) => {
    const selected: boolean = this.isSelectedRow(row);
    return { config: this._config, index, selected };
  };

  backgroundColor = (obj: { index?: number; row?: any; column?: IColumn }) => {
    const { index, row, column } = obj;
    if (!!column) {
      return column.backgroundColor;
    }
    const isSelected: boolean = this.isSelectedRow(row);
    return this.service.background(this._config, index, isSelected);
  };

  //#endregion

  //#region COLUMN - DRAG AND DROP

  setMoveClass = (element: ElementRef) => {
    element.nativeElement.classList.add('move');
  }

  removeMoveClass = (element: ElementRef) => {
    element.nativeElement.classList.remove('move');
  }

  getActiveDragbox = (
    index: number,
    direction: 'row' | 'column'
  ): ElementRef => {
    const drogboxes: QueryList<ElementRef> =
      direction === 'row' ? this.rowDragboxes : this.columnDragboxes;
    return drogboxes.find((_: ElementRef, i) => i === index);
  };

  columnSourceIndex: number = -1;

  columnDragStart(index: number) {
    this.columnSourceIndex = index;
    const dragbox: ElementRef = this.getActiveDragbox(index, 'column');
    this.setMoveClass(dragbox);
  }

  columnDragOver(event: DragEvent, index: number) {
    if (this.columnSourceIndex === -1) {
      return;
    }
    [...Array(this.columnDragboxes.length).keys()].forEach(i => {
      const dragbox: ElementRef = this.getActiveDragbox(i, 'column');
      if ([index, this.columnSourceIndex].includes(i)) {
        this.setMoveClass(dragbox)
      } else {
        this.removeMoveClass(dragbox);
      }
    });
    event.preventDefault?.();
  }

  columnDrop(index: number) {
    [
      this.getActiveDragbox(index, 'column'),
      this.getActiveDragbox(this.columnSourceIndex, 'column')
    ].forEach(dragbox => {
      this.removeMoveClass(dragbox);
    });
    if (!this.dropSuccessControl(index)) {
      this.columnSourceIndex = -1;
      return;
    }

    const tempColumns: any[] = structuredClone(this._columns);
    const column: any = this._columns[this.columnSourceIndex];
    this._columns.splice(this.columnSourceIndex, 1);
    this._columns.splice(index, 0, column);
    this.columnSourceIndex = -1;
    const dragDropResult: IDragAngDrop = {
      oldValue: tempColumns.map((a) => a.field),
      newValue: this._columns.map((a) => a.field),
    };
    this.onColumnDrop.emit(dragDropResult);
  }

  dropSuccessControl = (index: number): boolean => {
    if ([-1, index].includes(this.columnSourceIndex)) {
      return false;
    }
    if (
      [index, this.columnSourceIndex].some((i) => this._columns[i].isFrozen)
    ) {
      console.log('FROZEN COLUMN CANNOT MOVE');
      return false;
    }
    return true;
  };

  //#endregion

  //#region ROW - DRAG AND DROP

  rowSourceIndex: number = -1;

  rowDragStart(index: number) {
    this.rowSourceIndex = index;
    const dragbox: ElementRef = this.getActiveDragbox(index, 'row');
    this.setMoveClass(dragbox);
  }

  rowDragOver(event: DragEvent, index: number) {
    if (this.rowSourceIndex === -1) {
      return;
    }
    [...Array(this.rowDragboxes.length).keys()].forEach(i => {
      const dragbox: ElementRef = this.getActiveDragbox(i, 'row');
      if ([index, this.rowSourceIndex].includes(i)) {
        this.setMoveClass(dragbox)
      } else {
        this.removeMoveClass(dragbox);
      }
    });
    event.preventDefault?.();
  }

  rowDrop(index: number) {
    [
      this.getActiveDragbox(index, 'row'),
      this.getActiveDragbox(this.rowSourceIndex, 'row')
    ].forEach(dragbox => {
      this.removeMoveClass(dragbox);
    });
    if (this.rowSourceIndex === -1 || index === this.rowSourceIndex) {
      this.rowSourceIndex = -1;
      return;
    }

    const tempData: any[] = structuredClone(this._data);
    const datum: any = this._data[this.rowSourceIndex];
    this._data.splice(this.rowSourceIndex, 1);
    this._data.splice(index, 0, datum);
    this.rowSourceIndex = -1;
    const dragDropResult: IDragAngDrop = {
      oldValue: tempData,
      newValue: this._data,
    };
    this.onColumnDrop.emit(dragDropResult);
  }

  //#endregion
}
