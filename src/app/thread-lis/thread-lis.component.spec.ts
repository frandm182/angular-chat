import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadLisComponent } from './thread-lis.component';

describe('ThreadLisComponent', () => {
  let component: ThreadLisComponent;
  let fixture: ComponentFixture<ThreadLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
