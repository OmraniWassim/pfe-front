import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppUser } from '../interface/appUser';
import { AppUserService } from '../servicre/appUser.service';

@Component({
  selector: 'app-add-app-user',
  templateUrl: './add-app-user.component.html',
  styleUrls: ['./add-app-user.component.css']
})
export class AddAppUserComponent {
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


}

