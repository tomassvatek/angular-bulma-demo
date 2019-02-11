import { Component, OnInit, Input } from '@angular/core';
import { IInterview } from 'src/app/models/IInterview';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent {
  @Input() interviews:IInterview[];
}