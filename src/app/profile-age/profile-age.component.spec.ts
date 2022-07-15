import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAgeComponent } from './profile-age.component';

describe('ProfileAgeComponent', () => {
  let component: ProfileAgeComponent;
  let fixture: ComponentFixture<ProfileAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
