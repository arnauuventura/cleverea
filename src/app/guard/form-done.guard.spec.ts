import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { formDoneGuard } from './form-done.guard';

describe('formDoneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formDoneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
