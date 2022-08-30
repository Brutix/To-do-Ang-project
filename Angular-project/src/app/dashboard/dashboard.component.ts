import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {ITask} from '../interfaces/Task';
import {DataHandlerService} from '../service/data-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: ITask[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.tasks = this.dataHandler.getTasks()
  }
}
