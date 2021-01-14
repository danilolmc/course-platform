import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewChildren, AfterViewInit } from '@angular/core';
import { trigger, transition, style, query, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [
    trigger('sideMenuList', [

      transition("* => *", [

        query(':enter', [
          style({ opacity: 0, transform: 'translateX(40px)' }),
          stagger(80, [
            animate('1.2s .5s ease', style({ opacity: 1, transform: 'translateX(0px)' }))
          ])
        ])
      ])
    ])
  ]
})
export class SideMenuComponent implements AfterViewInit {

  @ViewChild('selectorMenu') selectorMenu !: ElementRef<HTMLSpanElement>;
  @ViewChild('inputRadio') inputRadio !: ElementRef<HTMLInputElement>;

  menuItems = [
    {
      item: 'All',
      selectorPosition: 0,
    },
    {
      item: 'Client Work',
      selectorPosition: 5.7,
    },
    {
      item: 'Design',
      selectorPosition: 11.7,
    },
    {
      item: 'Development',
      selectorPosition: 17.7,
    },
    {
      item: 'Languages',
      selectorPosition: 23.4,
    },
    {
      item: 'Management',
      selectorPosition: 29.4,
    },
    {
      item: 'Tools',
      selectorPosition: 35.3,
    },

  ]

  constructor(private render: Renderer2, private element: ElementRef) { }

  ngAfterViewInit(){

    this.inputRadio.nativeElement.click()
  }

  selectItem(position: number, element: Element) {
    this.render.setStyle(this.selectorMenu.nativeElement, 'top', `${position}vh`);

      (element as HTMLInputElement).click()

  }
}
