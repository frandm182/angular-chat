import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLisComponent } from './message-lis.component';

describe('MessageLisComponent', () => {
  let component: MessageLisComponent;
  let fixture: ComponentFixture<MessageLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
