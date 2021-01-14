import { Component, Renderer2, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { faEllipsisH, faUserFriends, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';
import { ToggleFooterService } from '../services/toggle-footer.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  ellipsisIcon = faEllipsisH;
  teamIcon = faUserFriends;
  checkSquare = faCheckSquare;

  cardSelected = false;

  @Input() course !: Course;

  @ViewChild('card') card !: ElementRef<HTMLDivElement>;

  @ViewChild('category') categoryElement !: ElementRef<any>;

  constructor(private render: Renderer2, private toggleFooterService: ToggleFooterService) { }

  ngOnInit(){
    this.toggleFooterService
        .isAllSelected()
        .subscribe(
          (isSelect) => {
            this.cardSelected = isSelect
            this.removeSelectedEffect()
          }
        )
  }

  selectCard() {

    this.cardSelected = !this.cardSelected

    if (this.cardSelected) {

      this.toggleFooterService.selectCourse(this.course);
      this.addSelectedEffect();

    } else {

      this.toggleFooterService.removeSelection(this.course);
      this.removeSelectedEffect()
    }
  }

  addSelectedEffect() {
    this.render.addClass(this.card.nativeElement, 'hoverCard');
  }

  removeSelectedEffect() {
    this.render.removeClass(this.card.nativeElement, 'hoverCard');
  }
}
