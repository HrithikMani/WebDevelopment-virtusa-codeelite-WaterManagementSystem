import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwarnessComponent } from './awarness/awarness.component';
import { HomeComponent } from './home.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
import { WaterTimingsComponent } from './water-timings/water-timings.component';

const routes: Routes = [{ path: '', component: HomeComponent,children :[
  { path: 'menu', component:MenuComponent},
  { path: 'awarness', component: AwarnessComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'WaterTimings', component: WaterTimingsComponent},
  { path: 'projects', component: ProjectsComponent}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[LoginService]
})
export class HomeRoutingModule { }
