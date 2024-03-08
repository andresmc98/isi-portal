import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtextDisplayComponent } from './richtext-display.component';

describe('RichtextDisplayComponent', () => {
  let component: RichtextDisplayComponent;
  let fixture: ComponentFixture<RichtextDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RichtextDisplayComponent]
    });
    fixture = TestBed.createComponent(RichtextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
