import { Component } from '@angular/core';
import { COLUMNS } from '../../constants/columns';
import {
  IColumn,
  IConfig,
  TerminatableComponent,
} from '../../../../../../projects/terminatable/src/public-api';
import { CONFIG } from '../../constants';
import { USERS } from '../../../../mock';
import { IUser } from '../../../../models/IUser';
import { ITab, Tab } from '../../../../models/ITab';
import { CommonModule } from '@angular/common';
import { TabsPipe } from '../../../../pipes';
import { TABS } from '../../../../mock/tabs';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { COLUMNS_CODE, HTML_CODE, USER_CODE } from '../../codes';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [
    CommonModule,
    TerminatableComponent,
    TabsPipe,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
  tabs: ITab[] = TABS;
  selectedTab: Tab = 'preview';

  dataCode =  USER_CODE;
  htmlCode = HTML_CODE;
  columnsCode = COLUMNS_CODE;

  config: IConfig = CONFIG;
  columns: IColumn[] = COLUMNS;

  data: IUser[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    this.data = USERS;
  };
}
