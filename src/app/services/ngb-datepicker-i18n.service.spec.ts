import { TestBed } from '@angular/core/testing';

import { NgbDatepickerI18nService } from './ngb-datepicker-i18n.service';

describe('NgbDatepickerI18nService', () => {
  let service: NgbDatepickerI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbDatepickerI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
