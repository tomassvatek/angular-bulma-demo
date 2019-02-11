import { Component, OnInit } from '@angular/core';
import { IInterview } from './models/IInterview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hr-profile-bulma';
  isModalActive: boolean = false;
  isModal2Active: boolean = false;
  interviews: IInterview[] = [];

  
  ngOnInit(): void {
  }

  onCreateInterview(interview: IInterview): void {
    this.interviews.push(interview);
    this.isModalActive = false;
  }

  onCancelButtonClick(): void {
    this.isModalActive = false;
  }

  // onCancelButtonClick2(): void {
  //   this.isModal2Active = false;
  //   this.isModalActive = true;
  // }

  openModal(): void {
    this.isModalActive = true;
  }
}
