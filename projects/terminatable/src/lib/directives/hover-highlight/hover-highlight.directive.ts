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
        style: {
          body: {
            hover: {
              color: { background, text },
            },
          },
        },
      },
    } = this.libHoverHighlight;

    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      background
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'color',
      text
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    const { config, index, selected } = this.libHoverHighlight;
    const { background, text } = this.styleService.color(
      config,
      index,
      selected
    );
    this.renderer.setStyle(this.el.nativeElement, 'background-color', background);
    this.renderer.setStyle(this.el.nativeElement, 'color', text);
  }
}
