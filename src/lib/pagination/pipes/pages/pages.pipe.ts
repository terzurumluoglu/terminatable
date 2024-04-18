import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
  standalone: true
})
export class PagesPipe implements PipeTransform {

  transform(value: number[], selectedPage: number): number[] {
    const min: number = value.at(0);
    const max: number = value.at(-1);

    const range: number[] = this.generatePagesArray({
      max,
      min,
      selectedPage,
    });
    return value.filter((val: number) => range.includes(val));
  }

  generatePagesArray = (obj: {selectedPage: number, min: number, max: number}) => {
    const { max, min, selectedPage } = obj;
    const numberArray: number[] = [...Array(5).keys()].map(a => a - 2).map((v: number) => selectedPage + v).filter(a => a > 0);
    return [...numberArray, min, max];
  }
}
