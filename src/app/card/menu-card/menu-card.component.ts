import { Component, OnInit } from '@angular/core';
import { faPen,faBullhorn, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  pencilIcon = faPen
  publishIcon = faBullhorn
  archiveIcon = faFolderOpen

  constructor() { }

  ngOnInit(): void {
  }

}
