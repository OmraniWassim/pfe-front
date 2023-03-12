import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ps } from 'src/app/components/forms-elements/ps';
import { PSService } from 'src/app/service/ps.service';
import { manager } from './manager';

@Component({
  selector: 'app-forms-elements',
  templateUrl: './forms-elements.component.html',
  styleUrls: ['./forms-elements.component.css']
})
export class FormsElementsComponent implements OnInit {

  Managers: manager[]
  
  PS : ps[]
  psM : ps;


  constructor(private PsService:PSService,
    private http:HttpClient,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadps()
      
  }


  private loadps(): void {
    this.PsService.getPS().subscribe((PS: ps[]) => {
      this.PS = PS;
    });
  }

 deleteps(id: number): void {
    this.PsService.deleteps(id).subscribe(() => {
      this.loadps();
    });
  }
 
  private ps() {
    this.PsService.getManager().subscribe((response: any) => {
      this.Managers = response.map((ps: any) => ps.name);
    });
  }

  public onAddpsM(addForm:NgForm):void{
    this.PsService.addps(addForm.value).subscribe((psM: ps) => {
      this.loadps();
      this.psM = {} as ps;

      
    } 
    ,
    (error) => {
        if (error.status === 400) {
          this.toastr.error("email deja existe");

        }else{
          this.toastr.success("success");
        }
    }
    );
  }
}
