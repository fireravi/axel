import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  user:any=[];
  user_Id:any;
  p:number = 1;

searchText:string='';
  constructor(public userservice:UserService ,public http:HttpClient) { }

  ngOnInit(): void {
    this.userlist()
  }
  userlist(){
    const obj={
      "userId":0,
    };
    this.userservice.userlist(obj).subscribe((data: any)=>{
      console.log(data);
      this.user=data;

    });

}
// onDelete(view: { user_Id: any; } ){
//   const obj={
//     "user_Id":0,
//   };
//   this.user.splice(view.user_Id,0)
//   this.userservice.onDelete(view).subscribe((data)=>{
//   console.log("data is deleted succesfull !",data)
//   })
// }
}
