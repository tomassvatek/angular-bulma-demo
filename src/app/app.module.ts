import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HrInformationComponent } from './components/hr-information/hr-information.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { CreateInterviewComponent } from './create-interview/create-interview.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HrInformationComponent,
    ActivitiesComponent,
    InterviewsComponent,
    InterviewListComponent,
    CreateInterviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
