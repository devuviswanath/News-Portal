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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private router:Router) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    
  ]);
 passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  matcher = new MyErrorStateMatcher();

public username:string="";
public email:string="";
 public password:string="";
public registrationForm:any


ngOnInit(): void {
   }
  
  register(){
    if(this.username!==""&& this.email!==""&& this.password!=="" && this.emailFormControl.valid){
      this.registrationForm= {
        "username":this.username,
      "email":this.email,
      "password":this.password
        }
        
      localStorage.setItem("registrationForm",JSON.stringify(this.registrationForm))
     
      this.router.navigate(["login"]);
    }
    else{
    alert("Please Fill the Fields")
    }
    
  } 
}
