import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { MenuComponent } from './menu/menu.component';
import { MyFeedbacksComponent } from './my-feedbacks/my-feedbacks.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent,children:[
  {path:'menu',component:MenuComponent},
  {path:'give-feedback',component:GiveFeedbackComponent},
  {path:'my-feedback',component:MyFeedbacksComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
