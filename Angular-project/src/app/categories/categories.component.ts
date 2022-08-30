import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../service/data-handler.service';
import {ICategory} from '../interfaces/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {


  }

}
