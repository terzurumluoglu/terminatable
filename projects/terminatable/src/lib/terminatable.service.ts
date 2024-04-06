import { Injectable } from '@angular/core';
import { SanitizerService, StyleService } from './services';
import { IConfig } from './models';

@Injectable({
  providedIn: 'root',
})
export class TerminatableService {
  constructor(
    private readonly sanitizerService: SanitizerService,
    private readonly styleService: StyleService
  ) {}

  //#region Sanitizer Service
  bypassSecurityTrustStyle = (value: string) =>
    this.sanitizerService.bypassSecurityTrustStyle(value);
  //#endregion


  //#region Style Service
  calculateTableContainerHeight = (size: number) => {
    return this.styleService.calculateTableContainerHeight(size);
  };

  background = (config: IConfig, index: number, isSelected: boolean) => {
    return this.styleService.background(config, index, isSelected);
  };
  //#endregion
}
