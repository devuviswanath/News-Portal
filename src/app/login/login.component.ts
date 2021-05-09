import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string="";
  
  
  public password:string="";
  details: any
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
login(){

   this.details=localStorage.getItem("registrationForm")
  var data=JSON.parse(this.details)
 
 if(this.email == data.email && this.password == data.password){
  this.router.navigate(["home"]);
 }else {
   alert("Invalid credentials");
 }
}
}
