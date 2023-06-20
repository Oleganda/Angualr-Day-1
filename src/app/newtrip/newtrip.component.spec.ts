import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtripComponent } from './newtrip.component';

describe('NewtripComponent', () => {
  let component: NewtripComponent;
  let fixture: ComponentFixture<NewtripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewtripComponent]
    });
    fixture = TestBed.createComponent(NewtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
