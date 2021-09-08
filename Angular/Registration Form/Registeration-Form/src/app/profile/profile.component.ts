import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']

})
export class ProfileComponent implements OnInit {
//   public username: string = "";
//   public password: string = "";
//   public submit: string ="";

//   myFunction(): void { 
     
//     this.submit ="Your username is "+ this.username+" and your password is "+this.password;
    
// } 

public username: any = "";
  public password: any = "";

  constructor() { 
    this.username = "";
    this.password = "";
    
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.password = localStorage.getItem("password");
  }

}

