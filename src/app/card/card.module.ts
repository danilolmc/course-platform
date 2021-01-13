import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShadowOnHoverAndCheckModule } from '../shared/directives/shadow-on-hover-and-check/shadow-on-hover-and-check.module';
import { HoverCategoryModule } from '../shared/directives/hover-category/hover-category.module';

@NgModule({
  declarations: [
    CardComponent,
    CardCategoryComponent
  ],
  exports: [CardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ShadowOnHoverAndCheckModule,
    HoverCategoryModule,
  ]
})
export class CardModule{}
