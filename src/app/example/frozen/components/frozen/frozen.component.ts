import { Component } from '@angular/core';

import { CONFIG } from '../../constants';
import { COLUMNS } from '../../constants/columns';
import { IColumn, IConfig, TerminatableComponent } from '../../../../../../projects/terminatable/src/public-api';
import { IUser } from '../../../../models/IUser';
import { USERS } from '../../../../mock';
import { CommonModule } from '@angular/common';
import { TabsPipe } from '../../../../pipes';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { ITab, Tab } from '../../../../models/ITab';
import { TABS } from '../../../../mock/tabs';
import { COLUMNS_CODE, HTML_CODE, USER_CODE } from '../../codes';

@Component({
  selector: 'app-frozen',
  standalone: true,
  imports: [
    CommonModule,
    TerminatableComponent,
    TabsPipe,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,],
  templateUrl: './frozen.component.html',
  styleUrl: './frozen.component.scss',
})
export class FrozenComponent {
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
