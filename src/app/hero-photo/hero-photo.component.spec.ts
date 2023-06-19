import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPhotoComponent } from './hero-photo.component';

describe('HeroPhotoComponent', () => {
  let component: HeroPhotoComponent;
  let fixture: ComponentFixture<HeroPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroPhotoComponent]
    });
    fixture = TestBed.createComponent(HeroPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
