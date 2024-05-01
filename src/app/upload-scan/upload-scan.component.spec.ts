import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadScanComponent } from './upload-scan.component';

describe('UploadScanComponent', () => {
  let component: UploadScanComponent;
  let fixture: ComponentFixture<UploadScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
