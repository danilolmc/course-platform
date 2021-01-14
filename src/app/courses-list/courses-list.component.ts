import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../course';
import { trigger, transition, query, stagger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  animations: [
    trigger('listAnimation', [

      transition("* => *", [

        query(':enter', [
          style({ opacity: 0 , transform: 'translateY(35px)'}),
          stagger(80, [
            animate('1.2s .5s ease', style({ opacity: 1,transform: 'translateY(0px)' }))
          ])
        ])
      ])
    ])
  ]
})
export class CoursesListComponent implements OnInit {


  courses: Course[] = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit() {

    this.courseService
      .getCourses()
      .subscribe(
        (courses: Course[]) => {
          this.courses = courses
        },
        () => console.log("Error"))
  }

}
