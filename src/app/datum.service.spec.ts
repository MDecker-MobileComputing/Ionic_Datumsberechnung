import { TestBed } from '@angular/core/testing';

import { DatumService } from './datum.service';

describe('DatumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatumService = TestBed.get(DatumService);
    expect(service).toBeTruthy();
  });
});
