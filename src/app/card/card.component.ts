import { Component, Renderer2, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { faEllipsisH, faUserFriends, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';
import { ToggleFooterService } from '../services/toggle-footer.service';
import { CardCategoryComponent } from './card-category/card-category.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('showHideMenuState', [
      state('isHidden', style({
        opacity: 0,
        transform: 'translate(3vw,3vh)',
        pointerEvents: 'none'
      })),

      state('isShown', style({
        opacity: 1,
        transform: 'translate(3vw,2vh)',
        pointerEvents: 'all'
      })),

      transition('isHidden=>isShown', animate('.5s ease')),
      transition('isShown=>isHidden', animate('.5s ease'))
    ])
  ]

})
export class CardComponent implements OnInit {

  ellipsisIcon = faEllipsisH;
  teamIcon = faUserFriends;
  checkSquare = faCheckSquare;

  cardSelected = false;

  cardMenuState = 'isHidden';

  @Input() course !: Course;

  @ViewChild('card') card !: ElementRef<HTMLDivElement>;

  @ViewChild('category') categoryElement !: CardCategoryComponent;

  constructor(private render: Renderer2, private toggleFooterService: ToggleFooterService) { }

  ngOnInit() {

    this.addEffectIfisAllSelected()

  }

  toogleCardMenu() {

    this.cardMenuState = this.cardMenuState == 'isHidden' ? 'isShown' : 'isHidden';
  }

  addEffectIfisAllSelected() {
    this.toggleFooterService
      .isAllSelected()
      .subscribe(
        (isAllSelect) => {
          this.cardSelected = isAllSelect
          if (isAllSelect) {
            this.addSelectedCardEffect()
            this.categoryElement.addCategoryEffect()
          }
          else {

            this.removeSelectedEffect()
            this.categoryElement.removeCategoryEffect()
          }
        }
      )
  }

  selectCard() {

    this.cardSelected = !this.cardSelected

    if (this.cardSelected) {

      this.toggleFooterService.selectCourse(this.course);
      this.addSelectedCardEffect();
      this.categoryElement.addCategoryEffect()

    } else {

      this.toggleFooterService.removeSelection();
      this.removeSelectedEffect()
      this.categoryElement.removeCategoryEffect()
    }
  }

  addSelectedCardEffect() {
    this.render.addClass(this.card.nativeElement, 'hoverCard');
  }

  removeSelectedEffect() {
    this.render.removeClass(this.card.nativeElement, 'hoverCard');
  }
}
