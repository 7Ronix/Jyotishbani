import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologercallComponent } from './astrologercall.component';

describe('AstrologercallComponent', () => {
  let component: AstrologercallComponent;
  let fixture: ComponentFixture<AstrologercallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrologercallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologercallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
