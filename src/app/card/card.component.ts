import { Component, OnInit, Renderer2, ElementRef, ViewChild, OnChanges, Output } from '@angular/core';
import { faEllipsisH, faUserFriends, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  ellipsisIcon = faEllipsisH;
  teamIcon = faUserFriends;
  checkSquare = faCheckSquare;

  cardSelected = false;

  @ViewChild('card') card !: ElementRef<HTMLDivElement>;

  constructor(private render: Renderer2) { }


  selectCard(){

    this.cardSelected = !this.cardSelected;

    if(this.cardSelected){

      this.render.addClass(this.card.nativeElement,'hoverCard');

    }else{

      this.render.removeClass(this.card.nativeElement,'hoverCard');
    }
  }



}
