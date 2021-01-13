import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { Course } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit() {

    this.courseService
      .getCourses()
      .subscribe(
        (courses: Course[]) => {
          this.courses = courses
        },
        err => console.log("Error"))
  }

}
