import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWaterComponent } from './add-water/add-water.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { GetFeedbackComponent } from './get-feedback/get-feedback.component';
import { MenuComponent } from './menu/menu.component';
import { UserWatermodelListComponent } from './user-watermodel-list/user-watermodel-list.component';

const routes: Routes = [{ path: '', component: EmployeeComponent,children:[
  {path:"menu",component:MenuComponent},
  {path:"get-feedback",component:GetFeedbackComponent},
  {path:"add-water",component:AddWaterComponent},
  {path:"water-model",component:UserWatermodelListComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[EmployeeService]
})
export class EmployeeRoutingModule { }
