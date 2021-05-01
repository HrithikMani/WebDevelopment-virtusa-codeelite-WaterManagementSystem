import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWaterModelsComponent } from './admin-water-models.component';

describe('AdminWaterModelsComponent', () => {
  let component: AdminWaterModelsComponent;
  let fixture: ComponentFixture<AdminWaterModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWaterModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWaterModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
