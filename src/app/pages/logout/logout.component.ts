import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';s

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.loginService.logoutUser();
    this.router.navigate(['']);
  }

}
