import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NafComponent } from './naf.component';

describe('NafComponent', () => {
  let component: NafComponent;
  let fixture: ComponentFixture<NafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
