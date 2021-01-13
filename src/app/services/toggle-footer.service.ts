import { Injectable } from '@angular/core';
import { Course } from '../course';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleFooterService{

  private subject = new Subject<Course[]>();

  selectedItems : Course[] = []

  selectCourse(course : Course){
    this.selectedItems.push(course)
    this.subject.next(this.selectedItems)
  }

  getSelectedCount(){
    return this.subject.asObservable();
  }

  removeSelection(course : Course){

    let indexUnchecked = this.selectedItems.findIndex(crs => crs.id == course.id);
    this.selectedItems.splice(indexUnchecked,1);
    this.subject.next(this.selectedItems);

  }

}
