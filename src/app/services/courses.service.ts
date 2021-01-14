import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../course';
import { Categories } from '../card/categories';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses: Course[] = [
    {
      id:0,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Management",
      students: 3
    },
    {
      id:1,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 11
    },
    {
      id:2,
      title: 'Basic of Financial Accounting',
      category: "Financial",
      students: 54
    },
    {
      id:3,
      title: 'Business English for Writings',
      category: "Languages",
      students: 25
    },
    {
      id:4,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 3
    },
    {
      id:5,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 14
    },
    {
      id:6,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 12
    },
    {
      id:7,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 31
    },
    {
      id:8,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 8
    },
    {
      id:9,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 14
    },
    {
      id:10,
      title: 'Illustrator CC 2019 MasterClass',
      category: "Client Work",
      students: 2
    }
  ]

  getCourses(): Observable<Course[]> {

    return of(this.courses);
  }

}
