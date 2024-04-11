import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TableComponent } from '../../projects/terminatable/src/lib/components/table/table.component';
import { UserService } from './services/user/user.service';
import { IUser } from './models/IUser';
import { IColumn } from '../../projects/terminatable/src/lib/models/IColumn';
import { IConfig } from '../../projects/terminatable/src/lib/models/IConfig';
import { CommonModule } from '@angular/common';
import { CONFIG } from './table.config';
import { TerminatableComponent } from '../../projects/terminatable/src/public-api';
import { CODE } from './code';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TerminatableComponent, CommonModule, Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'terminatable-project';

  code: string = CODE;

  @ViewChild('caption') caption: TemplateRef<any>;

  config: IConfig = CONFIG;

  columns: IColumn[] = [
    {
      field: 'id',
      title: 'Id',
      width: 200,
      isFrozen: true,
      isVisible: true,
    },
    {
      field: 'name',
      title: 'Name',
      width: 200,
      isFrozen: false,
      isVisible: true,
    },
    {
      field: 'username',
      title: 'Username',
      width: 200,
      isFrozen: false,
      isVisible: true,
    },
    {
      field: 'email',
      title: 'E-Mail',
      width: 200,
      isFrozen: false,
      isVisible: true,
    },
    {
      field: 'phone',
      title: 'Phone Number',
      width: 200,
      isFrozen: false,
      isVisible: true,
    },
    {
      field: 'website',
      title: 'Web Site',
      width: 200,
      isFrozen: false,
      isVisible: true,
    },
  ];

  data: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    this.data = await this.userService.getAllUsers();
    // this.data .length = 2;
  };

  onChange(event: any[]) {
    console.log(event);
  }

  onRowSelect = (event: any) => {
    console.log(event);
  }

  onColumnDrop = (event: any) => {
    console.log(event);
  }
  
  onRowDrop = (event: any) => {
    console.log(event);
  }

}
