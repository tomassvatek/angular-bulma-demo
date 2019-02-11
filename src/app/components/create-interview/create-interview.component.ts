import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IInterview } from 'src/app/models/IInterview';

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.scss']
})
export class CreateInterviewComponent {
  @Input() isActive;
  @Output() createInterview = new EventEmitter();
  @Output() cancel = new EventEmitter();
  interview = {} as IInterview;

  handleSaveChanges(): void {
    this.createInterview.emit(this.interview);
  }

  handleCancelButtonClick(): void {
    this.cancel.emit();
  }
}
