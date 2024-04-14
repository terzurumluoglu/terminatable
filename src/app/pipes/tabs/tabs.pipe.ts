import { Pipe, PipeTransform } from '@angular/core';
import { ITab } from '../../models/ITab';

@Pipe({
  name: 'tabs',
  standalone: true
})
export class TabsPipe implements PipeTransform {

  transform(value: ITab[], arg: string): ITab[] {
    return value.filter((val: ITab) => val.tables.includes(arg));
  }

}
