import { TestBed } from '@angular/core/testing';

import { UploadScanService } from './upload-scan.service';

describe('UploadScanService', () => {
  let service: UploadScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
