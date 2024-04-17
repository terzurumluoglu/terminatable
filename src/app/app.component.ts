import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerminatableComponent } from '../../projects/terminatable/src/public-api';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { BasicComponent } from './example/basic/components';
import { TabsPipe } from './pipes';
import { FrozenComponent } from './example/frozen/components';
import { StripComponent } from './example/strip/components';
import { HoverComponent } from './example/hover/components';
import { RowSelectionComponent } from './example/row-selection/components';
import { ColorCustomizeComponent } from './example/color-customize/components';
import { MultiSelectComponent } from './example/multi-select/components';
import { DragDropComponent } from './example/drag-drop/components';
import { PaginationComponent } from './example/pagination/components';

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
    HoverComponent,
    RowSelectionComponent,
    ColorCustomizeComponent,
    MultiSelectComponent,
    DragDropComponent,
    PaginationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'terminatable-project';

  constructor() {}

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

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
