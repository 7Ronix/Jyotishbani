import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerchatComponent } from './astrologerchat.component';

describe('AstrologerchatComponent', () => {
  let component: AstrologerchatComponent;
  let fixture: ComponentFixture<AstrologerchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrologerchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologerchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
