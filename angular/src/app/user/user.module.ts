import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { MyFeedbacksComponent } from './my-feedbacks/my-feedbacks.component';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    MenuComponent,
    GiveFeedbackComponent,
    MyFeedbacksComponent,
    FeedbackModalComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[UserService]
})
export class UserModule { }
