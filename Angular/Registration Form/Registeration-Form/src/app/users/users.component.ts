import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

const USERS = [
  {name:"John",age:"21",level:"2"},
  {name:"Lara",age:"18",level:"2"},
  {name:"Tracy",age:"19",level:"3"},
  {name:"Mike",age:"20",level:"1"},
  {name:"Angel",age:"23",level:"4"},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = USERS;
    this.userService.SetToStorage("Service Injected");
  }

}
