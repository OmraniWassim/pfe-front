import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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


  constructor(private PsService:PSService,
    private http:HttpClient) { }

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

}
