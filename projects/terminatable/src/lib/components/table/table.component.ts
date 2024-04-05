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
import { IBody, IConfig } from '../../models/IConfig';
import { IColumn } from '../../models/IColumn';
import { SanitizerService, StyleService } from '../../services';
import { SafeStyle } from '@angular/platform-browser';
import { CheckboxComponent } from '../../checkbox/components/checkbox/checkbox.component';
import { ICheckboxModel } from '../../checkbox/models/ICheckbox';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements AfterViewInit {
  @ViewChild('selectAll') selectAll: CheckboxComponent;
  @ContentChild('caption') caption: TemplateRef<any>;
  @ContentChild('footer') footer: TemplateRef<any>;

  _tableContainerHeight: SafeStyle = this.sanitizer.bypassSecurityTrustStyle('calc(100%)');

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

  constructor(
    private readonly sanitizer: SanitizerService,
    private readonly styleService: StyleService) {}

  ngAfterViewInit(): void {
    const val: number = [this.caption, this.footer].filter(a => !!a).length;
    this._tableContainerHeight = this.styleService.calculateTableContainerHeight(val);
  }

  background = (index: number) => {
    const key: string = this._config.strip && index % 2 === 0 ? 'even' : 'odd';
    const body: IBody = this._config.style.body;
    return body[key as keyof typeof body].color.background;
  }

  prepareCheckboxDataForSend = () => {
    console.log(this._data);
    const dataWithoutChecked: any[] = this._data.filter(d => d.checked).map(d => {
      const { checked, ...data } = d;
      return data;
    })
    this.onChange.emit(dataWithoutChecked);
  }

  generateCheckboxData = () => {
    this._data = this._data.map(data => {
      const d = {
        checked: false,
        ...data,
      };
      return d;
    });
  }

  onChangeAll(event: boolean) {
    this._data.forEach(item => item.checked = event);
    this.prepareCheckboxDataForSend()
  }

  onChangeOne(checkBoxModel: ICheckboxModel) {
    if (checkBoxModel.checked) {
      this.selectAll.selectedAll = this._data.every(d => d.checked);
    } else {
      this.selectAll.selectedAll = false;
    }
    this.prepareCheckboxDataForSend();
  }
}
