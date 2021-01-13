import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent implements OnInit {

  @Input() courseCategory = "";
  @Input() classCategory = "";

  constructor() { }

  ngOnInit(): void {
  }

}
