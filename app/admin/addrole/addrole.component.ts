import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {

  constructor(private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
  }
addroleform=this.fb.group({
  role_Id :['',Validators.required],
  role_Name:['',Validators.required],
  role_Uniqid:['',Validators.required],
  role_Status:['',Validators.required],
  role_Type:['',Validators.required]
})
SaveRole(){
const obj={
  "action": "A",
  "role_Id": 0,
  "role_Name":this.addroleform.value.role_Name ,
  "role_Type":this.addroleform.value.role_Type ,
  "role_Uniqid":this.addroleform.value.role_Uniqid ,
  "role_Status":this.addroleform.value.role_Status ,
  "role_Created_UserId": 0
  //"action": "A",
  //"role_Id": 0,
 // "role_Name":this.addroleform.value.role_Name,
  //"role_Type": this.addroleform.value.role_Type,
 // "role_Uniqid": this.addroleform.value.role_Uniqid,
//  "role_Status": this.addroleform.value.role_Status,
  //"role_Created_UserId":0
}
this.userservice.SaveRole(obj).subscribe((res:any)=>{
  console.log(res);
  if(res==1)
  {
    alert("successfuly role add")
  }
  else{
     if(res==2){
      alert("RoleAlreadyExisted")
 }
  else{
    alert("Failed to add Role")
   }
}
})
}
}
