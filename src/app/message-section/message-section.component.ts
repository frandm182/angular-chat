import { ApplicationState } from './../store/application-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {
    store.subscribe(
      state => console.log('Message section component', state)
    );
   }

  ngOnInit() {
  }

}
