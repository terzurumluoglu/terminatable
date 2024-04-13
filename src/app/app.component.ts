import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerminatableComponent } from '../../projects/terminatable/src/public-api';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { BasicComponent } from './example/basic/components';
import { TabsPipe } from './pipes';
import * as BASIC from './example/basic/codes';
import * as FROZEN from './example/frozen/codes';
import * as STRIP from './example/strip/codes';
import { FrozenComponent } from './example/frozen/components';
import { StripComponent } from './example/strip/components';

type Tab = 'columns' | 'html' | 'preview' | 'config' | 'data';

export interface ITab {
  id: Tab;
  title: string;
  tables: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TerminatableComponent,
    CommonModule,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,
    TabsPipe,
    BasicComponent,
    FrozenComponent,
    StripComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'terminatable-project';

  basicTab: Tab = 'preview';
  frozenTab: Tab = 'preview';
  stripTab: Tab = 'preview';

  tabs: ITab[] = [
    {
      id: 'preview',
      title: 'Preview',
      tables: ['basic', 'row-select', 'strip'],
    },
    {
      id: 'columns',
      title: 'Columns',
      tables: ['basic', 'row-select', 'strip'],
    },
    {
      id: 'config',
      title: 'Config',
      tables: ['row-select', 'strip'],
    },
    {
      id: 'data',
      title: 'Data',
      tables: ['basic', 'row-select', 'strip'],
    },
    {
      id: 'html',
      title: 'HTML',
      tables: ['basic', 'row-select', 'strip'],
    },
  ];

  basic = {
    data: BASIC.USER_CODE,
    html: BASIC.HTML_CODE,
    columns: BASIC.COLUMNS_CODE,
  };

  frozenColumn = {
    data: FROZEN.USER_CODE,
    html: FROZEN.HTML_CODE,
    columns: FROZEN.COLUMNS_CODE,
  };

  strip = {
    data: STRIP.USER_CODE,
    html: STRIP.HTML_CODE,
    columns: STRIP.COLUMNS_CODE,
    config: STRIP.CONFIG_CODE,
  };

  constructor() {}

  onChange(event: any[]) {
    console.log(event);
  }

  onRowSelect = (event: any) => {
    console.log(event);
  };

  onColumnDrop = (event: any) => {
    console.log(event);
  };

  onRowDrop = (event: any) => {
    console.log(event);
  };
}
