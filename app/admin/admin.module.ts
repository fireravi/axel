import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddroleComponent } from './addrole/addrole.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './sort.directive';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [

    AdminComponent,
    ViewuserComponent,
    EditprofileComponent,
    AdduserComponent,
    AddroleComponent,
    ViewroleComponent,
    SearchPipe,
    SortDirective,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  




  ]
})
export class AdminModule { }
