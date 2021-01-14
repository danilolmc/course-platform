import { Injectable } from '@angular/core';
import { Course } from '../course';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleFooterService{

  subject = new Subject<Course[]>();

  subjectSelectAll = new Subject<boolean>();

  selectedItems : Course[] = []

  selectionCount = new BehaviorSubject<number>(0);


  selectCourse(course : Course){
    let isAlreadySelected = this.selectedItems.filter(crs => crs.id == course.id).length > 0;

    if(!isAlreadySelected){

      this.selectedItems.push(course);
      this.subject.next(this.selectedItems)
    }

    this.selectionCount.next(this.selectionCount.value + 1)


  }

  getSelectedCount(){
    return this.selectionCount.asObservable();
  }

  removeSelection(){

    this.selectionCount.next(this.selectionCount.value - 1)

  }

  storeAllCourses(courseList : Course[]){
    this.selectedItems = courseList;
    this.subject.next(courseList)
    this.subjectSelectAll.next(true)
    this.selectionCount.next(courseList.length)
  }

  removeAllCourses(){
    this.selectedItems = [];
    this.subject.next(this.selectedItems)
    this.subjectSelectAll.next(false)
    this.selectionCount.next(0)
  }

  isAllSelected(){

    return this.subjectSelectAll.asObservable();
  }
}
