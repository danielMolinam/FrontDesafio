import { TestBed } from '@angular/core/testing';

import { ProductividadService } from './productividad.service';

describe('ProductividadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductividadService = TestBed.get(ProductividadService);
    expect(service).toBeTruthy();
  });
});
