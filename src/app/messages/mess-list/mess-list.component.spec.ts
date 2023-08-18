import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessListComponent } from './mess-list.component';

describe('MessListComponent', () => {
  let component: MessListComponent;
  let fixture: ComponentFixture<MessListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessListComponent]
    });
    fixture = TestBed.createComponent(MessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
