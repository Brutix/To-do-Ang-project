import { Injectable } from '@angular/core';
import {ICategory} from "../interfaces/Category";
import {TestData} from "../data/TestData";
import {ITask} from '../interfaces/Task';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})




export class DataHandlerService {

  taskSubject = new BehaviorSubject<ITask[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<ICategory[]>(TestData.categories);

  constructor() {
    this.fillTasks();
  }

  // getCategories(): ICategory[] {
  //   return TestData.categories;
  // }

  fillTasks() {
    this.taskSubject.next(TestData.tasks);

  }

  fillTasksByCategory(category: ICategory){
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }
}
