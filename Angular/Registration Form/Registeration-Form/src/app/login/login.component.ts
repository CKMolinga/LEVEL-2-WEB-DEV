import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public isenabled: boolean = false;

  submitform() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    this.router.navigate(["/profile"]);
    // if(this.username.length<5 || this.username.length>10) {
    // alert("Username must be 5 or more characters long and not longer tha 10");
    // this.isenabled = true;
    // }
    // if(this.password.length<5 || this.password.length>10) {
    // alert("Password must be 5 or more characters long and not longer tha 10");
    // this.isenabled = true;
    // }
    
    }

  // checklength() {
  //   if(this.username.length<5 || this.username.length>10) {
  //     alert("Username must be 5 or more characters long and not longer tha 10");
  //   }
  //   if(this.password.length<5 || this.password.length>10) {
  //     alert("Password must be 5 or more characters long and not longer tha 10");
  //   }
  //   this.isenabled = !this.isenabled;
  // }

   

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
