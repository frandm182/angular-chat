import { LoadUserThreadsAction } from './../store/actions';
import { AllUserData } from './../../../shared/to/all-user-data';
import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService, private store: Store<ApplicationState>) {
    store.subscribe(
      state => console.log('Thread section component', state)
    );
  }

  ngOnInit() {
    this.threadsService.loadUserThreads().subscribe(
      allUserData => this.store.dispatch(
        new LoadUserThreadsAction(allUserData)
      )
    );
  }

}
