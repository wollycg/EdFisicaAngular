import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqComponent } from './parq.component';

describe('ParqComponent', () => {
  let component: ParqComponent;
  let fixture: ComponentFixture<ParqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
