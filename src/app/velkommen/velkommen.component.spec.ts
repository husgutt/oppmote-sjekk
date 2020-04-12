import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelkommenComponent } from './velkommen.component';

describe('VelkommenComponent', () => {
  let component: VelkommenComponent;
  let fixture: ComponentFixture<VelkommenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelkommenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelkommenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
