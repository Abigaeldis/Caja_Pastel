import { TestBed } from '@angular/core/testing';

import { PlatCommandeService } from './plat-commande.service';

describe('PlatCommandeService', () => {
  let service: PlatCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
