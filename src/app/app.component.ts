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
