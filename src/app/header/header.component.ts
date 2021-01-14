import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { faPlusSquare, faBell } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  plusIcon = faPlusSquare;
  searchIcon = faSearch;
  bellIcon = faBell;

  @ViewChild("focusedItem") spanFocus !: ElementRef<HTMLSpanElement>
  @ViewChild("li") ul !: ElementRef<HTMLUListElement>;

  constructor(private render: Renderer2, private elementRef : ElementRef<HTMLLIElement>) { }

  ngOnInit(): void {
  }

  focus(tranformX: number, padddingX : number,) {
    this.render.setStyle(this.spanFocus.nativeElement, 'transform', `translateX(${tranformX}px)`);
    this.render.setStyle(this.spanFocus.nativeElement, 'padding', `16px ${padddingX}px`);
  }

}
