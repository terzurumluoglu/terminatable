import { Component } from '@angular/core';
import { COLUMNS } from '../../constants/columns';
import { IColumn, IConfig, TerminatableComponent } from '../../../../../../projects/terminatable/src/public-api';
import { CONFIG } from '../../constants';
import { USERS } from '../../../../mock';
import { IUser } from '../../../../models/IUser';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [TerminatableComponent],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
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
