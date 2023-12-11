import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubLideresComponent } from './club-lideres.component';

describe('ClubLideresComponent', () => {
  let component: ClubLideresComponent;
  let fixture: ComponentFixture<ClubLideresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubLideresComponent]
    });
    fixture = TestBed.createComponent(ClubLideresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
