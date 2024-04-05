import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { IConfig } from '../../models';
import { StyleService } from '../../services';

@Directive({
  selector: '[libHoverHighlight]',
  standalone: true,
})
export class HoverHighlightDirective {
  @Input() libHoverHighlight: {
    config: IConfig;
    index: number;
    selected: boolean;
  };

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private styleService: StyleService
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    const {
      config: {
        style: { body },
      },
      selected,
    } = this.libHoverHighlight;
    const color: string = selected
      ? body.selected.color.background
      : body.hover.color.background;
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const { config, index, selected } = this.libHoverHighlight;
    const color: string = selected
      ? config.style.body.selected.color.background
      : this.styleService.background(config, index);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
