import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverCategory]'
})
export class HoverCategoryDirective{

  // @Input() categoryElement!: ElementRef<any>;

  constructor(private render: Renderer2, private elementRef : ElementRef) { }


  // ngAfterViewInit(){
  //   this.categoryElement = this.elementRef;
  // }

  // @HostListener('mouseover')
  // HoverOn() {

  //   console.log(this.categoryElement)
  // }





}
