import { Component } from '@angular/core';

import { COLUMNS } from '../../constants/columns';
import { IColumn, IConfig, TerminatableComponent } from '../../../../../../projects/terminatable/src/public-api';
import { USERS } from '../../../../mock';
import { IUser } from '../../../../models/IUser';
import { CONFIG } from '../../constants';

@Component({
  selector: 'app-strip',
  standalone: true,
  imports: [TerminatableComponent],
  templateUrl: './strip.component.html',
  styleUrl: './strip.component.scss',
})
export class StripComponent {
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
