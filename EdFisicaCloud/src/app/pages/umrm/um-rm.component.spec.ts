import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmRMComponent } from './um-rm.component';

describe('UmRMComponent', () => {
  let component: UmRMComponent;
  let fixture: ComponentFixture<UmRMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmRMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
