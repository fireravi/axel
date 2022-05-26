import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {

Roles:any;
p: number = 1;
searchText:any
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
this.SaveRole();
  }
  SaveRole(){
  const obj={
    "expression":"",
    "sortby":"",
    "rowno":0,
  };
  this.userservice.Rolelist(obj).subscribe((data: any)=>{
    console.log(data);
    this.Roles=data;

  });

}
}
