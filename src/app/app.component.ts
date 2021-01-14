import { Component, OnInit, HostListener } from '@angular/core';
import { ToggleFooterService } from './services/toggle-footer.service';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private courseService: CoursesService, private toggleFooterService : ToggleFooterService ) { }

  ngOnInit() {

  }

  @HostListener('window:keyup',['$event'])
  KeyEvent(event : KeyboardEvent){

    const teclaESCCode = 27

    if(event.keyCode == teclaESCCode){

        if(this.toggleFooterService.isAllSelected()){
          this.toggleFooterService.removeAllCourses()
        }
    }
  }

}
