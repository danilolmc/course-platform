import { Component, OnInit, Renderer2, ElementRef, OnChanges } from '@angular/core';
import { faBullhorn, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { ToggleFooterService } from '../services/toggle-footer.service';
import { Course } from '../course';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent {

  speaker = faBullhorn;
  folder = faFolderOpen;
  footerClass = "isHidden";
  selectedCount = 0;

  constructor(private render: Renderer2, private elementRef: ElementRef<any>, private toogleFooterService: ToggleFooterService) {
    this.toggleFooter();
    this.getSelectedCount()

  }

  toggleFooter() {

    this.toogleFooterService
      .getSelectedCount()
      .subscribe(
        (courses: Course[]) => {

          if (courses.length > 0) {

            this.footerClass = "isShown"
          } else {

            this.footerClass = "isHidden"
          }
        }
      )

  }

  getSelectedCount() {

    this.toogleFooterService
      .getSelectedCount()
      .subscribe(
        courses => {
          this.selectedCount = courses.length
        }
      )
  }
}
