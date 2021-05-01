import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAwarnessComponent } from './admin-awarness.component';

describe('AdminAwarnessComponent', () => {
  let component: AdminAwarnessComponent;
  let fixture: ComponentFixture<AdminAwarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAwarnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAwarnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
