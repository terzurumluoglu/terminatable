import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, QueryList, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IConfig } from '../../models/IConfig';
import { BODY_BACKGROUND_COLOR, HEADER_BACKGROUND_COLOR, HEIGHT_BY_PERCENT, WIDTH_BY_PERCENT } from '../../constants';
import { IColumn } from '../../models/IColumn';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  @ContentChild('caption') caption: TemplateRef<any>;
  @ContentChild('footer') footer: TemplateRef<any>;

  _columns: IColumn[] = [];
  @Input() set columns(value: any[]){
    this._columns = value;
    console.log(value);
  }

  _data: any[] = [];
  @Input() set data(value: any[]){
    this._data = value;    console.log(value);
  }

}

