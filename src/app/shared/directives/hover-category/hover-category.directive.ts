import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHoverCategory]'
})
export class HoverCategoryDirective {

  @Input() categoryElement !: ElementRef<any>

  constructor(private redenr: Renderer2, private elementRef : ElementRef) { }



}
