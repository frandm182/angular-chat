import { INITIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule, Action } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadLisComponent } from './thread-lis/thread-lis.component';
import { MessageLisComponent } from './message-lis/message-lis.component';

import { ThreadsService } from './services/threads.service';

import { reducer } from './store/reducer';


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadLisComponent,
    MessageLisComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
