import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserRole } from '../enum/appUserRole.enum';
import { AppUser } from '../interface/appUser';
import { LoginService } from '../servicre/login.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string ="hh";
  user: User=new User();
  appUser:AppUser;

  constructor(private loginservice:LoginService,private router: Router){}
  ngOnInit(): void {

  }


  loginUser(): void {
    this.loginservice.loginUser(this.user).subscribe(
      (appUser: AppUser) => {
        this.appUser = appUser;
        alert("succesfull")
      },
      (error) => console.log(error)
    );
  }


}
