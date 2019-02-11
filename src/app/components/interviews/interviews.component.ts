import { Component, OnInit } from '@angular/core';
import { IInterview } from 'src/app/models/IInterview';

@Component({
  selector: 'app-interview',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  interview: IInterview;
  
  constructor() { }

  ngOnInit() {
  }

}
