import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubServiciosComponent } from './club-servicios.component';

describe('ClubServiciosComponent', () => {
  let component: ClubServiciosComponent;
  let fixture: ComponentFixture<ClubServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubServiciosComponent]
    });
    fixture = TestBed.createComponent(ClubServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
