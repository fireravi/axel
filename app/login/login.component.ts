import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginModel } from '../login';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userId:any;
  constructor(private userService: UserService,private fb:FormBuilder,private router:Router) {}

  ngOnInit(): void {
    //this.login();

  }
  loginform=this.fb.group({
    username:[''],
    password:['']
  })
  login() {
    const loginModel = new LoginModel(this.loginform.controls['username'].value,
                                      this.loginform.controls['password'].value);
    this.userService
      .login(loginModel)
      .subscribe((res: any) => {
        console.log(res);
        if(res=='')
        {
          alert("Login Failed");
        }
        else
{
          alert("Login Sucessful");

           this.userId=res[0].userId;
         console.log(this.userId);
          this.getUserById(this.userId);
          this.loginform.reset();

          this.router.navigate(['user/edit-deyails']);
          this.router.navigate(['admin']);

        }


      });
      localStorage.setItem('user',this.loginform.controls['username'].value)
  }
  getUserById(input:any){
    const obj={
      "userId": input
    }
this.userService.getUserbyId(obj)
.subscribe((res:any)=>{
      console.log(res);
    });
  }
}
