import { TestBed } from '@angular/core/testing';

import { MessListService } from './mess-list.service';

describe('MessListService', () => {
  let service: MessListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
