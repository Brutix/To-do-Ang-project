import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../service/data-handler.service';
import {ICategory} from '../interfaces/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories()
    console.log(this.categories)
  }

}
