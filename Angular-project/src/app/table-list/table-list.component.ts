import {Component, OnInit} from '@angular/core';
import {TestData} from '../data/TestData';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public list = TestData;
// @ts-ignore
  public list2 = this.list.categories.map(item=> {
    for (let key in item) {
      console.log(key);
    }
  }
)
  constructor() { }
  // @ts-ignore

  public getID = function(obj: any){
    for (let key in obj){
      console.log(key);
      return key;

    }
  }
  ngOnInit() {
  }

}
