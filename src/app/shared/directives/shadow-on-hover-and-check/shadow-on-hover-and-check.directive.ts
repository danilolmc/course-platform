import { Directive, Renderer2, ElementRef, HostListener, Input, AfterViewInit, Component } from '@angular/core';
import { CardCategoryComponent } from 'src/app/card/card-category/card-category.component';

@Directive({
  selector: '[appShadowOnHoverAndCheck]'
})
export class ShadowOnHoverAndCheckDirective implements AfterViewInit{

  @Input() shadowByChecked = false;

  @Input() categoryComponent !: CardCategoryComponent;

  constructor(private render: Renderer2, private elementRef: ElementRef<any>) {
  }

  ngAfterViewInit(){
    this.shadowByChecked = false;
  }

  categoryClass = "";

  @HostListener('mouseover')
  shadowOn() {
    if (!this.shadowByChecked) {
      this.render.addClass(this.elementRef.nativeElement,'hoverCard');
      this.categoryComponent.addCategoryEffect()
    }


  }

  @HostListener('mouseleave')
  shadowOff() {
    if(!this.shadowByChecked) {

      this.render.removeClass(this.elementRef.nativeElement,'hoverCard');
      this.categoryComponent.removeCategoryEffect()
    }

  }
}
