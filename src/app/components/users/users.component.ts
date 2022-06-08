import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUsers} from "../../interfaces/IUsers";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUsers[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users=value)
  }

}
