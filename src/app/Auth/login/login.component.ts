import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppUserDTO } from '../../interface/app-user-dto';
import { LoginService } from '../../service/login.service';
import { User } from './User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User=new User();
  appUserDTO:AppUserDTO;
  data: AppUserDTO;

  constructor(private loginservice:LoginService,
    private router: Router,
    private toastr:ToastrService){}

  ngOnInit(): void {

  }
  loginUser(): void {
    this.loginservice.loginUser(this.user).subscribe(
      (data:AppUserDTO) => {
        this.data=data;
        localStorage.setItem('currentUser', JSON.stringify(data));
      
        if(this.data.reponse === "RESPONSABLE") {
          // Si la réponse est "RESPONSABLE", rediriger l'utilisateur vers le tableau de bord
          this.router.navigate(['/dashboard']);
  
        } else if(this.data.reponse === "password") {
          // Si la réponse est "password", afficher un message d'erreur
          this.toastr.error("Mot de passe incorrect");
  
        } else if(this.data.reponse === "disabled") {
          // Si la réponse est "disabled", afficher un message d'erreur
          this.toastr.error("Veuillez activer votre compte");
  
        } else {
          // Si aucune des conditions précédentes n'est remplie, rediriger l'utilisateur vers le tableau de bord
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        if(error.status === 500) {
          this.toastr.error("Utilisateur non trouvé");
          console.log("Erreur");
        }
      }
    );
  }
}  