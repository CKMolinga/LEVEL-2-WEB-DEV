import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fullstack: boolean =false;
  cyberscurity: boolean =false;
 digitalMarketing: boolean =false;

  showForm1() {
    this.fullstack = !this.fullstack;
  }
  showForm2() {
    this.cyberscurity = !this.cyberscurity;
  }
  showForm3() {
    this.digitalMarketing = !this.digitalMarketing;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
