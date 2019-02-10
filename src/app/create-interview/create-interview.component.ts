import { Component, Input } from '@angular/core';
import { IInterview } from '../models/IInterview';

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.scss']
})
export class CreateInterviewComponent {
  @Input() isActive;
  interview = {} as IInterview;

  toogleModal(): void {
    this.isActive = !this.isActive;
  }

  handleSaveChanges(): void {
    console.log(this.interview);
  }
}
