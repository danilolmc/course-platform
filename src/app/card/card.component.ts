import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { faEllipsisH, faUserFriends, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';
import { CardCategoryComponent } from './card-category/card-category.component';
import { ToggleFooterService } from '../services/toggle-footer.service';

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

  @Input() course !: Course;

  @ViewChild('card') card !: ElementRef<HTMLDivElement>;

  @ViewChild('category') categoryElement !: ElementRef<any>;


  constructor(private render: Renderer2,private toggleFooterService : ToggleFooterService) { }


  selectCard(){

    this.cardSelected = !this.cardSelected;

    if(this.cardSelected){

      this.toggleFooterService.selectCourse(this.course);
      this.render.addClass(this.card.nativeElement,'hoverCard');

    }else{

      this.toggleFooterService.removeSelection(this.course);
      this.render.removeClass(this.card.nativeElement,'hoverCard');
    }


  }}
