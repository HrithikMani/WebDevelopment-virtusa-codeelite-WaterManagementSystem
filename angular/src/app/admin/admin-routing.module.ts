import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAwarnessComponent } from './admin-awarness/admin-awarness.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AdminWaterModelsComponent } from './admin-water-models/admin-water-models.component';
import { AdminComponent } from './admin.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminusersComponent } from './adminusers/adminusers.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:"menu",component:AdminmenuComponent},
  {path:"users",component:AdminusersComponent},
  {path:"watermodels",component:AdminWaterModelsComponent},
  {path:"awarness",component:AdminAwarnessComponent},
  {path:"projects",component:AdminProjectsComponent},

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
