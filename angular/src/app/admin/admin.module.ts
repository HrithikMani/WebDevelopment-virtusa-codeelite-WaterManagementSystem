import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminWaterModelsComponent } from './admin-water-models/admin-water-models.component';
import { AdminAwarnessComponent } from './admin-awarness/admin-awarness.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { UpdateModelComponent } from './update-model/update-model.component';
import { AwarnessModelComponent } from './awarness-model/awarness-model.component';
import { ProjectsModelComponent } from './projects-model/projects-model.component';
import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdminheaderComponent,
    AdminmenuComponent,
    AdminusersComponent,
    AdminWaterModelsComponent,
    AdminAwarnessComponent,
    AdminProjectsComponent,
    UpdateModelComponent,
    AwarnessModelComponent,
    ProjectsModelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[AdminService]
})
export class AdminModule { }
