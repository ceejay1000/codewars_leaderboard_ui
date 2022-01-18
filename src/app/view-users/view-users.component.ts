import { Component, OnInit } from '@angular/core';
import {getUsers} from "../../mock/mockUser"

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users: any = []
  constructor() { }

  ngOnInit(): void {
    this.users = getUsers();
  }

}
