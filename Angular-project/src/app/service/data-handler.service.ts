import { Injectable } from '@angular/core';
import {ICategory} from "../interfaces/Category";
import {TestData} from "../data/TestData";
import {ITask} from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): ICategory[] {
    return TestData.categories;
  }

  getTasks(): ITask[] {
    return TestData.tasks;
  }
}
