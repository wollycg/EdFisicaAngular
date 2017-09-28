import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcqComponent } from './rcq.component';

describe('RcqComponent', () => {
  let component: RcqComponent;
  let fixture: ComponentFixture<RcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
