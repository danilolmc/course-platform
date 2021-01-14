import { Injectable } from '@angular/core';
import { Course } from '../course';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleFooterService{

  subject = new Subject<Course[]>();

  subjectSelectAll = new Subject<boolean>();

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

  storeAllCourses(courseList : Course[]){
    this.selectedItems = courseList;
    this.subject.next(courseList)
    this.subjectSelectAll.next(true)
  }

  removeAllCourses(){
    this.selectedItems = [];
    this.subject.next(this.selectedItems)
    this.subjectSelectAll.next(false)
    console.log(this.selectedItems)
  }

  isAllSelected(){

    return this.subjectSelectAll.asObservable();
  }
}
