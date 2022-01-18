import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {getUsers} from "../../mock/mockUser"

interface User {
    username: string,
    name: string,
    clan: string,
    honour: number,
    languages: {name: string, rank: number}[],
    overall_rank: number
}

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users: User[] = [];
  codewarsUsers!: object;
  leaderboardUrl: string = ""

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users = getUsers();

    this.http.get(this.leaderboardUrl).subscribe(leaderboardData => {
      this.codewarsUsers = leaderboardData;
    })
  }

  sortByHonour(){
    this.users = this.users.slice().sort(function(a, b){
        return a.honour - b.honour;
    } )
  }

  sortByRank(){
    this.users = this.users.slice().sort(function(a, b){
        return a.overall_rank - b.overall_rank;
    } )
  }

}
