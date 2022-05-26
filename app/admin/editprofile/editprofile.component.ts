import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

url:string='';
selectdImage:any=null;
userdata:any;


editform=new FormGroup({
  firstname:new FormControl(''),
  lastname:new FormControl(''),
  username:new FormControl(''),
  password:new FormControl(''),
  Email:new FormControl(''),
  phone:new FormControl(''),
  profileimage:new FormControl(''),
  IsAdmin:new FormControl(''),
  userid:new FormControl(''),
  Address:new FormControl(''),
  Mapaddresslink:new FormControl(''),
  user_Type:new FormControl(''),
})

  constructor(private route:ActivatedRoute,private service:UserService) { }
  ngOnInit(): void {
    this.Editeprofile();

  }
  Editeprofile(){
    var id=this.route.snapshot.paramMap.get('id');
 console.log(id)
    const obj1={
      "userId":id,


    }
    console.log(obj1);
    this.service.userlist(obj1)
    .subscribe((res:any)=>{

      this.userdata=res;
      console.log(this.userdata);
      console.log(this.userdata[0]);

      this.editform.controls["firstname"].setValue(this.userdata[0].user_Firstname);
      this.editform.controls["lastname"].setValue(this.userdata[0].user_Lastname);
      this.editform.controls["username"].setValue(this.userdata[0].user_Username);
      this.editform.controls["password"].setValue(this.userdata[0].uE_Password);
      this.editform.controls["Email"].setValue(this.userdata[0].user_Email);
      this.editform.controls["phone"].setValue(this.userdata[0].user_Phone );
      this.editform.controls["Mapaddresslink"].setValue(this.userdata[0].user_Mapaddresslink  );
      this.editform.controls["Address"].setValue(this.userdata[0].user_Address );
      this.editform.controls["IsAdmin"].setValue(this.userdata[0].user_IsAdmin );
      this.editform.controls["userid"].setValue(this.userdata[0].user_Id );
      this.editform.controls["user_Type"].setValue(this.userdata[0].user_Type );
    })
  }
  save(){
    var user=this.route.snapshot.paramMap.get('id')
    const obj={
      "action": "u",
      "user_Id":user,
      "user_Firstname":this.editform.value.firstname,
      "user_Lastname":this.editform.value. lastname ,
      "user_Phone": this.editform.value.phone,
      "user_Email":this.editform.value. Email ,
      "user_Address":this.editform.value. Address,
      "user_Mapaddresslink":this.editform.value.Mapaddresslink,
      "user_Username":this.editform.value.username,
      "uE_Password":this.editform.value. password ,
      "user_Profileimage":this.editform.value.password,
      "user_Roleid":102,
      "user_IsAdmin":"",
      "user_Type":this.editform.value. user_Type ,
      "user_Status":"",
      "user_Created_Userid":1,
      "err_no": 0
    }
    this.service.SaveUser(obj)
    .subscribe((res:any)=>{
      console.log(res);
      if(res==1){
        alert('user updated successfully');
      }
      else{
alert('alredy existed')
      }

    })
    console.log(this.editform.value);
    alert('user updated successfuly')
  }


// onselectfile(event:any){
//   if(event.target.files) {
//     var reader=new FileReader();
//     reader.onload=(e:any)=>this.url=e.target.result
//     reader.readAsDataURL(event.target.files[0]);
//     this.selectdImage=event.target.files[0];
//   }

//  }
}



