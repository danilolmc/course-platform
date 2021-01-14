import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { Course } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
