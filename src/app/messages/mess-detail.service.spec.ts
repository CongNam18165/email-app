import { TestBed } from '@angular/core/testing';

import { MessDetailService } from './mess-detail.service';

describe('MessDetailService', () => {
  let service: MessDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
