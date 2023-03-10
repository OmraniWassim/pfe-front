import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppUserRole } from '../enum/appUserRole.enum';
import { AppUserDTO } from '../interface/app-user-dto';
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
  appUserDTO:AppUserDTO;

  constructor(private loginservice:LoginService,private router: Router,private toastr:ToastrService){}
  ngOnInit(): void {

  }



  loginUser(): void {
    this.loginservice.loginUser(this.user).subscribe(
      (appUserDTO: AppUserDTO) => {
        this.appUserDTO = appUserDTO;


        if(this.appUserDTO.reponse === "RESPONSABLE") {
          this.router.navigate(['/dashboard']);

        } else if(this.appUserDTO.reponse==="password"){
          alert("password incorrect");

        }else if(this.appUserDTO.reponse==="disabled"){
          alert("enable your account");


        }
       },(error)=>{
          if(error.status===500){

           this.toastr.error("does not exist");
          }
       }
       );







}
}
