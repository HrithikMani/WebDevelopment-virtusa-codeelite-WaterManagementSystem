import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModelComponent } from './projects-model.component';

describe('ProjectsModelComponent', () => {
  let component: ProjectsModelComponent;
  let fixture: ComponentFixture<ProjectsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
