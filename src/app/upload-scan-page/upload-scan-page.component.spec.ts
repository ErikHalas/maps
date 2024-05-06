import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadScanPageComponent } from './upload-scan-page.component';

describe('UploadScanPageComponent', () => {
  let component: UploadScanPageComponent;
  let fixture: ComponentFixture<UploadScanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadScanPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadScanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
