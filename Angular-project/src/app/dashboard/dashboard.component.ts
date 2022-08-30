import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {ITask} from '../interfaces/Task';
import {DataHandlerService} from '../service/data-handler.service';
import {ICategory} from "../interfaces/Category";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: ITask[];
  categories: ICategory[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories)


  }

  showTaskByCategory(category: ICategory) {
    this.dataHandler.fillTasksByCategory(category);
  }
}
