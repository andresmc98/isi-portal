import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPresentationComponent } from './club-presentation.component';

describe('ClubPresentationComponent', () => {
  let component: ClubPresentationComponent;
  let fixture: ComponentFixture<ClubPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubPresentationComponent]
    });
    fixture = TestBed.createComponent(ClubPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
