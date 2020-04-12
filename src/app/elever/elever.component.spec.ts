import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleverComponent } from './elever.component';

describe('EleverComponent', () => {
  let component: EleverComponent;
  let fixture: ComponentFixture<EleverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
