import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPagination } from '../../models/pagination';
import { HoverHighlightDirective } from '../../../directives';
import { IConfig } from '../../../models';
import { PagesPipe } from '../../pipes';

@Component({
  selector: 'lib-pagination',
  standalone: true,
  imports: [CommonModule, HoverHighlightDirective, PagesPipe],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  pages: number[] = [];
  selectedPage: number = 1;
  pagination: IPagination = {};

  @Input() config: IConfig;

  _data: any[];
  @Input() set data(value: any[]) {
    this._data = value;
    this.preparePagination();
  }

  _limit: number;
  @Input() set limit(value: number) {
    this._limit = value;
    this.preparePagination();
  }

  @Output() onSelectedPage: EventEmitter<IPagination> = new EventEmitter<IPagination>();

  preparePagination = () => {
    if (!!this._data?.length && !!this._limit) {
      const limit: number = Math.ceil(this._data.length / this._limit);
      this.pages = [...Array(limit).keys()].map((a) => ++a);
      this.pagination.totalCount = this._data.length;
      this.pagination.totalPage = limit;
      this.pagination.rowsPerPage = this._limit;
      this.selectPage();
    }
  };

  selectPage = (value: number = 1) => {
    this.selectedPage = value;
    this.pagination.currentPage = value;
    this.pagination.nextPage = this.pagination.totalPage > value ? value + 1 : undefined;
    this.pagination.previousPage = value > 1 ? value - 1 : undefined;
    this.onSelectedPage.emit(this.pagination);
  };

  showPrevious = () => {
    return this.pagination.currentPage > 1;
  }

  showNext = () => {
    return this.pagination.totalPage > this.pagination.currentPage;
  }
}
