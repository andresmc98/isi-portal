import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubquienessomosComponent } from './clubquienessomos.component';

describe('ClubquienessomosComponent', () => {
  let component: ClubquienessomosComponent;
  let fixture: ComponentFixture<ClubquienessomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubquienessomosComponent]
    });
    fixture = TestBed.createComponent(ClubquienessomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
