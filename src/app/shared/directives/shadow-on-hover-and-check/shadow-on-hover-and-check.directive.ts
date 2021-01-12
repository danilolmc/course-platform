import { Directive, Renderer2, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadowOnHoverAndCheck]'
})
export class ShadowOnHoverAndCheckDirective implements OnInit{

  @Input() shadowByChecked = false;

  constructor(private render: Renderer2, private elementRef: ElementRef<any>) {
  }

  ngOnInit(){

    console.log(this.shadowByChecked)
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
