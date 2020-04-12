import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkjemaListeComponent } from './skjema-liste.component';

describe('SkjemaListeComponent', () => {
  let component: SkjemaListeComponent;
  let fixture: ComponentFixture<SkjemaListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkjemaListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkjemaListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
