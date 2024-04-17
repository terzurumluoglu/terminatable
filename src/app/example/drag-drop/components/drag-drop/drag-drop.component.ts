import { Component } from '@angular/core';

import { COLUMNS } from '../../constants/columns';
import { IColumn, IConfig, TerminatableComponent } from '../../../../../../projects/terminatable/src/public-api';
import { USERS } from '../../../../mock';
import { IUser } from '../../../../models/IUser';
import { CONFIG } from '../../constants';
import { TABS } from '../../../../mock/tabs';
import { ITab, Tab } from '../../../../models/ITab';
import { COLUMNS_CODE, CONFIG_CODE, EVENT_CODE, HTML_CODE, USER_CODE } from '../../codes';
import { CommonModule } from '@angular/common';
import { TabsPipe } from '../../../../pipes';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { IDragAngDrop } from '../../../../../../projects/terminatable/src/lib/models/IDragDrop';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [
    CommonModule,
    TerminatableComponent,
    TabsPipe,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
})
export class DragDropComponent {
  tabs: ITab[] = TABS;
  selectedTab: Tab = 'preview';

  dataCode =  USER_CODE;
  htmlCode = HTML_CODE;
  columnsCode = COLUMNS_CODE;
  configCode = CONFIG_CODE;
  eventCode = EVENT_CODE;

  config: IConfig = CONFIG;
  columns: IColumn[] = COLUMNS;

  data: IUser[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    this.data = USERS;
  };

  onRowDrop = (event: IDragAngDrop) => {
    console.log(event);
  }
  onColumnDrop = (event: IDragAngDrop) => {
    console.log(event);
  }
}
