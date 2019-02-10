import { Component, OnInit } from '@angular/core';
import { IActivity } from './IActivity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities: IActivity[] = [
    { name: 'English', level: 'Advanced' },
    { name: 'Germany', level: 'Intermediate' },
    { name: 'Czech', level: 'Native' }
  ]; 

  constructor() { }

  ngOnInit() {
  }

}

