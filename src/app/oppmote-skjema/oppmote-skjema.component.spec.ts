import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppmoteSkjemaComponent } from './oppmote-skjema.component';

describe('OppmoteSkjemaComponent', () => {
  let component: OppmoteSkjemaComponent;
  let fixture: ComponentFixture<OppmoteSkjemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppmoteSkjemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppmoteSkjemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
