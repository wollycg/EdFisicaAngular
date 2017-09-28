import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscoCoroniarianComponent } from './risco-coroniarian.component';

describe('RiscoCoroniarianComponent', () => {
  let component: RiscoCoroniarianComponent;
  let fixture: ComponentFixture<RiscoCoroniarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscoCoroniarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscoCoroniarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
