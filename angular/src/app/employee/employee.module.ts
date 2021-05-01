import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AddWaterComponent } from './add-water/add-water.component';
import { GetFeedbackComponent } from './get-feedback/get-feedback.component';
import { FormsModule } from '@angular/forms';
import { DeleteModelComponent } from './delete-model/delete-model.component';
import { UserWatermodelListComponent } from './user-watermodel-list/user-watermodel-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    MenuComponent,
    AddWaterComponent,
    GetFeedbackComponent,
    DeleteModelComponent,
    UserWatermodelListComponent
 
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
