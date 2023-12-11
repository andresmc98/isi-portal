import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubGaleriaComponent } from './club-galeria.component';

describe('ClubGaleriaComponent', () => {
  let component: ClubGaleriaComponent;
  let fixture: ComponentFixture<ClubGaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubGaleriaComponent]
    });
    fixture = TestBed.createComponent(ClubGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
