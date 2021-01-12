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
      title: 'Illustrator CC 2019 MasterClass',
      category: "Management",
      students: 3
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 11
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 54
    },
    {
      title: 'Business English for Writings',
      category: "Languages",
      students: 25
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 3
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 14
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 12
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 31
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 8
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Design",
      students: 14
    },
    {
      title: 'Illustrator CC 2019 MasterClass',
      category: "Client Work",
      students: 2
    }
  ]

  getCourses(): Observable<Course[]> {

    return of(this.courses);
  }

}
