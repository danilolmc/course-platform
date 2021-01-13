import { Directive, Renderer2, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appShadowOnHoverAndCheck]'
})
export class ShadowOnHoverAndCheckDirective implements AfterViewInit{

  @Input() shadowByChecked = false;

  constructor(private render: Renderer2, private elementRef: ElementRef<any>) {
  }

  ngAfterViewInit(){
    this.shadowByChecked = false;
  }

  @HostListener('mouseover')
  shadowOn() {
    if (!this.shadowByChecked) {
      this.render.addClass(this.elementRef.nativeElement,'hoverCard');
    }
  }

  @HostListener('mouseleave')
  shadowOff() {
    if(!this.shadowByChecked) {

      this.render.removeClass(this.elementRef.nativeElement,'hoverCard');
    }
  }
}
