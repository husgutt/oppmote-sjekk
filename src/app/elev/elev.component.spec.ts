import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevComponent } from './elev.component';

describe('ElevComponent', () => {
  let component: ElevComponent;
  let fixture: ComponentFixture<ElevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
