import { Component } from '@angular/core';
import { IInterview } from './models/IInterview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hr-profile-bulma';
  isModalActive: boolean = true;
  interviews: IInterview[];
}
