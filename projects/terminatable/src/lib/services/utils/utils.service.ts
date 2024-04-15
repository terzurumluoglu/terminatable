import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  deepMerge = (target: any, source: any) => {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (source[key] instanceof Object && target[key] instanceof Object) {
          target[key] = this.deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
}
