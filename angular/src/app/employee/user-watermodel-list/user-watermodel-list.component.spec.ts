import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWatermodelListComponent } from './user-watermodel-list.component';

describe('UserWatermodelListComponent', () => {
  let component: UserWatermodelListComponent;
  let fixture: ComponentFixture<UserWatermodelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWatermodelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWatermodelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
