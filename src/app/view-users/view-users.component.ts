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
  codewarsUsers!: User[];
  leaderboardUrl: string = "http://localhost:8081/v1/leaderboard"
  sortRankInDescendingOrder: boolean = true;
  sortHonourInDescendingOrder: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users = getUsers();

    this.http.get<User[]>(this.leaderboardUrl).subscribe(leaderboardData => {
      this.codewarsUsers = leaderboardData;
    })
  }

  sortByHonour(sortType: string){
    this.sortHonourInDescendingOrder = !this.sortHonourInDescendingOrder;
    console.log(sortType)
    if (sortType === "descending"){
      this.sortHonourInDescendingOrder = false;
      this.codewarsUsers = this.codewarsUsers.slice().sort(function(a, b){
        return a.honour - b.honour;
    } )
    } else {
      this.sortHonourInDescendingOrder = true;
      this.codewarsUsers = this.codewarsUsers.slice().sort(function(a, b){
        return b.honour - a.honour;
    } )
    }
  }

  sortByRank(sortType: string){
    this.sortRankInDescendingOrder = !this.sortRankInDescendingOrder;
    if (sortType === "descending") {
      this.sortRankInDescendingOrder = false;
      this.codewarsUsers = this.codewarsUsers.slice().sort(function(a, b){
        return a.overall_rank - b.overall_rank;
      })
    } else {
      this.sortRankInDescendingOrder = true;
      this.codewarsUsers = this.codewarsUsers.slice().sort(function(a, b){
        return b.overall_rank - a.overall_rank;
    } )
    }
  }

}
