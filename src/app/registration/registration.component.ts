import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppUser } from '../interface/appUser';
import { AppUserService } from '../servicre/appUser.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{


  isEnabled:boolean=true;
  appUsers: AppUser[];
  appUser: AppUser;
  constructor(private appUserService:AppUserService) {}

  ngOnInit(): void {
    this.loadAppUsers();

  }

  private loadAppUsers(): void {
    this.appUserService.getAppUsers().subscribe((appUsers: AppUser[]) => {
      this.appUsers = appUsers;
    });
  }
  public onAddAppUser(addForm:NgForm):void{
    this.appUserService.addAppUser(addForm.value).subscribe((appUser: AppUser) => {
      this.loadAppUsers();
      this.appUser = {} as AppUser;
    });
  }
  deleteAppUser(id: number): void {
    this.appUserService.deleteAppUser(id).subscribe(() => {
      this.loadAppUsers();
    });
  }

}
