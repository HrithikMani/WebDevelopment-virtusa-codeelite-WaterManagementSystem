import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTimingsComponent } from './water-timings.component';

describe('WaterTimingsComponent', () => {
  let component: WaterTimingsComponent;
  let fixture: ComponentFixture<WaterTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterTimingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
