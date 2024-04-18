import { Pipe, PipeTransform } from '@angular/core';
import { IPagination } from '../../pagination/models';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], args: IPagination): any[] {
    if (!Object.keys(args)?.length) {
      return value;
    }
    const { currentPage, rowsPerPage } = args;
    return value.slice((currentPage - 1) * rowsPerPage, rowsPerPage * currentPage);
  }

}
