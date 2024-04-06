import { Injectable } from '@angular/core';
import { SanitizerService } from '../sanitizer/sanitizer.service';
import { IConfig } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  constructor(private sanitizer: SanitizerService) {}

  calculateTableContainerHeight = (size: number) => {
    size = size * 50;
    const str: string = !!size ? `calc(100% - ${size}px)` : '100%';
    return this.sanitizer.bypassSecurityTrustStyle(str);
  };

  background = (config: IConfig, index: number, isSelected: boolean) => {
    const key: string = isSelected ? 'selected' : (config.strip && index % 2 === 0 ? 'even' : 'odd');
    const body = config.style.body;
    return body[key as keyof typeof body].color.background;
  };
}
