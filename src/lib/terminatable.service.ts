import { Injectable } from '@angular/core';
import { SanitizerService, StyleService, UtilsService } from './services';
import { IConfig } from './models';

@Injectable({
  providedIn: 'root',
})
export class TerminatableService {
  constructor(
    private readonly sanitizerService: SanitizerService,
    private readonly styleService: StyleService,
    private readonly utils: UtilsService,
  ) {}

  //#region Sanitizer Service
  bypassSecurityTrustStyle = (value: string) =>
    this.sanitizerService.bypassSecurityTrustStyle(value);
  //#endregion


  //#region Style Service
  calculateTableContainerHeight = (size: number) => {
    return this.styleService.calculateTableContainerHeight(size);
  };

  color = (config: IConfig, index: number, isSelected: boolean) => {
    return this.styleService.color(config, index, isSelected);
  };
  //#endregion

  //#region UTILS
  deepMerge = (target: IConfig, source: IConfig) => {
    return this.utils.deepMerge(target, source);
  }
  //#endregion
}
