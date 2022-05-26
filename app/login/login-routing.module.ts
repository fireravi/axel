import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from '../admin/adduser/adduser.component';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent },
                         {path:'adduser',component:AdduserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
