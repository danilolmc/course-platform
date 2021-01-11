import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  ellipsisIcon = faEllipsisH;
  teamIcon = faUserFriends

  constructor() { }

  ngOnInit(): void {
  }

}
