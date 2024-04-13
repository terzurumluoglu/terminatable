import { Component } from '@angular/core';

import { CONFIG } from '../../constants';
import { COLUMNS } from '../../constants/columns';
import { IColumn, IConfig, TerminatableComponent } from '../../../../../../projects/terminatable/src/public-api';
import { IUser } from '../../../../models/IUser';
import { USERS } from '../../../../mock';

@Component({
  selector: 'app-frozen',
  standalone: true,
  imports: [TerminatableComponent],
  templateUrl: './frozen.component.html',
  styleUrl: './frozen.component.scss',
})
export class FrozenComponent {
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
