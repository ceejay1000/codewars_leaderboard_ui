import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {getUsers} from "../../mock/mockUser"

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users: any = [];
  codewarsUsers!: object;
  leaderboardUrl: string = ""

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users = getUsers();

    this.http.get(this.leaderboardUrl).subscribe(leaderboardData => {
      this.codewarsUsers = leaderboardData;
    })
  }

}
