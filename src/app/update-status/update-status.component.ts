import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  //names=["Pending","Approved","Out for delivery","Delivered"];
  selected:string="";

  //option:string="";
  //update(e:string){ this.selected = e.target.value }

  constructor(private jwtHelper:JwtHelperService) {
   }

  ngOnInit(): void {
  }

  // get_status(status){

  // }

  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}

