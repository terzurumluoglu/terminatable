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

  fillColor = (document: Element, color: {background: string, text: string}) => {
    const { background, text } = color;
    const docs: Element[] = Array.from(document.children);
    docs.forEach(doc => {
      this.renderer.setStyle(doc, 'background-color', background);
      this.renderer.setStyle(doc, 'color', text);
    })
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.libHoverHighlight.config.hover) {
      return;
    }
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

    this.fillColor(this.el.nativeElement, { background, text });
  }

  @HostListener('mouseleave') onMouseLeave() {
    const { config, index, selected } = this.libHoverHighlight;
    if (!config.hover) {
      return;
    }
    const { background, text } = this.styleService.color(
      config,
      index,
      selected
    );
    this.fillColor(this.el.nativeElement, { background, text });
  }
}
