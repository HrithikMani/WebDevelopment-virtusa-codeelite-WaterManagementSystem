import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AwarnessComponent } from './awarness/awarness.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { WaterTimingsComponent } from './water-timings/water-timings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    HomeComponent,
    AwarnessComponent,
    MenuComponent,
    ProjectsComponent,
    WaterTimingsComponent,
    LoginComponent,
    SignupComponent,
    CarouselComponent,
    Login2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
