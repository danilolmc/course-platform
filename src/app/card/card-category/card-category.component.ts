import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/course';
import { Categories } from '../categories';

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
