import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyElevComponent } from './ny-elev.component';

describe('NyElevComponent', () => {
  let component: NyElevComponent;
  let fixture: ComponentFixture<NyElevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyElevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyElevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
