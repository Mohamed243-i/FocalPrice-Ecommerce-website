/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MassggesService } from './massgges.service';

describe('Service: Massgges', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassggesService]
    });
  });

  it('should ...', inject([MassggesService], (service: MassggesService) => {
    expect(service).toBeTruthy();
  }));
});
