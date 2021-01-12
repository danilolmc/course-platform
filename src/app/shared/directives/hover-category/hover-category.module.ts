import { NgModule } from '@angular/core';
import { HoverCategoryDirective } from './hover-category.directive';

@NgModule({
  declarations: [HoverCategoryDirective],
  exports: [HoverCategoryDirective]
})
export class HoverCategoryModule{}
