import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, MaxLengthValidator, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
 passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  matcher = new MyErrorStateMatcher();
  details: any
  data:any
  constructor(private router:Router) { }
  public username:string="";
  public email:string="";
   public password:string="";
   public registrationForm:any
  ngOnInit(): void {
    this.details=localStorage.getItem("registrationForm")
  this.data=JSON.parse(this.details)
  this.username=this.data.username;
  this.email=this.data.email
  this.password=this.data.password
  }
  
saved(){
  if(this.username!==""&& this.email!==""&& this.password!=="" && this.passwordFormControl.valid && this.nameFormControl.valid ){this.registrationForm= {
    "username":this.username,
  "email":this.email,
  "password":this.password
    }
  localStorage.setItem("registrationForm",JSON.stringify(this.registrationForm))
 
  this.details=localStorage.getItem("registrationForm")
this.data=JSON.parse(this.details)
alert("success");
this.router.navigate(["home"]);
}else{
  alert("Please Fill the Fields")
}
  
    
}
delete(){
  localStorage.clear();
  alert("deleted");
  this.router.navigate(["login"]);
}
}
