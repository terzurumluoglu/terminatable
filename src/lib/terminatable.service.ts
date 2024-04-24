import { Injectable } from '@angular/core';
import { SanitizerService, StyleService } from './services';
declare const require: (path: string) => any;

@Injectable({
  providedIn: 'root',
})
export class TerminatableService {
  constructor(
    private readonly sanitizerService: SanitizerService,
    private readonly styleService: StyleService,
  ) {}

  get version() {
    const { version } = require("../../package.json");
    return version;
  }

  //#region Sanitizer Service
  bypassSecurityTrustStyle = (value: string) =>
    this.sanitizerService.bypassSecurityTrustStyle(value);
  //#endregion


  //#region Style Service
  calculateTableContainerHeight = (size: number) => {
    return this.styleService.calculateTableContainerHeight(size);
  };
  //#endregion

}
