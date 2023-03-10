import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppUser } from '../../interface/appUser';
import { AppUserService } from '../../service/appUser.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{



  isEnabled:boolean=true;
  appUsers: AppUser[];
  appUser: AppUser;
  constructor(private appUserService:AppUserService,private toastr: ToastrService) {}

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

      
    } ,
    (error) => {
        if (error.status === 400) {
          this.toastr.error("email deja existe");

        }else{
          this.toastr.success("success");
        }
    }
    );
    addForm.resetForm();

  }

  deleteAppUser(id: number): void {
    this.appUserService.deleteAppUser(id).subscribe(() => {
      this.loadAppUsers();
    });
  }




  printReport(format: string) {
    if (format === 'pdf') {
      window.print();
    } else if (format === 'excel'){
      let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    let tableSelect = document.getElementById('users');
    let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
    let downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
    downloadLink.download = 'users-report.xls';
    downloadLink.click();
    document.body.removeChild(downloadLink);

    }

  }


}
