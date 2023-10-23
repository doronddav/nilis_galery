import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMuoseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'heghlight-product');
  }
  @HostListener('mouseleave') onMouseEnter() {
    this.renderer.removeClass(this.element.nativeElement, 'heghlight-product');
  }
}
