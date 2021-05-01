import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarnessModelComponent } from './awarness-model.component';

describe('AwarnessModelComponent', () => {
  let component: AwarnessModelComponent;
  let fixture: ComponentFixture<AwarnessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwarnessModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwarnessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
