import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShadowOnHoverAndCheckModule } from '../shared/directives/shadow-on-hover-and-check/shadow-on-hover-and-check.module';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardCategoryComponent,
    MenuCardComponent
  ],
  exports: [CardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ShadowOnHoverAndCheckModule,
  ]
})
export class CardModule{}
