import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  getuserbyid:any;
  Userid:any;
  url: any;
  selectdImage: any;

  constructor(private user:UserService, private builder:FormBuilder,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {}
  onselectfile(event:any){
    if(event.target.files) {
      var reader=new FileReader();
      reader.onload=(e:any)=>this.url=e.target.result
      reader.readAsDataURL(event.target.files[0]);
      this.selectdImage=event.target.files[0];
    }
  }
  signupform=this.builder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    Email:['',Validators.required],
    phone:['',Validators.required],
    profileimage:['',Validators.required],
    IsAdmin:['',Validators.required],
    userid:['',Validators.required],
    Address:['',Validators.required],
    Mapaddresslink:['',Validators.required],
    user_Type:['',Validators.required],
  })
  SaveUser(){
    console.log("data is ", this.signupform.value.firstname);
    console.log(this.signupform.value. lastname);
    const obj={
      "action": "A",
      "user_Id":0,
      "user_Firstname":this.signupform.value.firstname,
      "user_Lastname":this.signupform.value. lastname ,
      "user_Phone": this.signupform.value.phone,
      "user_Email":this.signupform.value. Email ,
      "user_Address":this.signupform.value. Address,
      "user_Mapaddresslink":this.signupform.value.Mapaddresslink,
      "user_Username":this.signupform.value.username,
      "uE_Password":this.signupform.value. password ,
      "user_Profileimage": this.signupform.value.profileimage,
      "user_Roleid":102,
      "user_IsAdmin":"",
      "user_Type":this.signupform.value. user_Type ,
      "user_Status":"",
      "user_Created_Userid":1,
      "err_no": 0
    }
  this.user.SaveUser(obj).subscribe((res:any)=>{
    console.log(res);
  });
  alert("add user")
  this.route.navigate(['admin']);
  }
  }
