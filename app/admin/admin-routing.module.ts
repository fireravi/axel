import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './addrole/addrole.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { ViewuserComponent } from './viewuser/viewuser.component';


const routes: Routes = [{ path: '', component: AdminComponent },
                         {path:'user',component:ViewuserComponent},
                         {path:'adduser',component:AdduserComponent},
                         {path:'view',component:ViewroleComponent},
                         {path:'role',component:AddroleComponent},
                         {path:'edit/:id',component:EditprofileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
