import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubContactoComponent } from './club-contacto.component';

describe('ClubContactoComponent', () => {
  let component: ClubContactoComponent;
  let fixture: ComponentFixture<ClubContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubContactoComponent]
    });
    fixture = TestBed.createComponent(ClubContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
