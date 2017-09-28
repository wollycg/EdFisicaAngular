import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetedobrasComponent } from './setedobras.component';

describe('SetedobrasComponent', () => {
  let component: SetedobrasComponent;
  let fixture: ComponentFixture<SetedobrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetedobrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetedobrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
