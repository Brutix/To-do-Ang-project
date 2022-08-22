import { Injectable } from '@angular/core';
import {ICategory} from "../interfaces/Category";
import {TestData} from "../data/TestData";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): ICategory[] {
    return TestData.categories;
  }
}
