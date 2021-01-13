import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverCategory]'
})
export class HoverCategoryDirective{

  constructor(private render: Renderer2, private elementRef : ElementRef) { }




}
