import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleComponent } from './purple.component';

describe('PurpleComponent', () => {
  let component: PurpleComponent;
  let fixture: ComponentFixture<PurpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
