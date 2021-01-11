import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faBell } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  plusIcon = faPlusSquare;
  searchIcon = faSearch;
  bellIcon = faBell;


  constructor() { }

  ngOnInit(): void {
  }

}
