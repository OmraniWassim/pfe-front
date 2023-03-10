import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  

username: string;
constructor(private loginService: LoginService) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      const currentUserObject = JSON.parse(currentUser);
      this.username = currentUserObject.username;
    } else {
      this.username = "Guest";
    }
  }
  
  logout() {
    this.loginService.logoutUser();

}
}
