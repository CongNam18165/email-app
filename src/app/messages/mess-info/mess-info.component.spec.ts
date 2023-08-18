import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessInfoComponent } from './mess-info.component';

describe('MessInfoComponent', () => {
  let component: MessInfoComponent;
  let fixture: ComponentFixture<MessInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessInfoComponent]
    });
    fixture = TestBed.createComponent(MessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
