import { Component } from '@angular/core';
import {
  IColumn,
  IConfig,
  TerminatableComponent,
} from '../../../../../projects/terminatable/src/public-api';
import { CONFIG } from '../../constants';
import { IUser } from '../../../models/IUser';
import { USERS } from '../../../mock';
import { COLUMNS } from '../../constants/columns';

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
