import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codewarsLeaderboard';
  apiUrl: string = "https://www.codewars.com/api/v1/users/emmanuelboss"
  constructor(private http: HttpClient){
    this.http.get(`${this.apiUrl}`)
    .subscribe(data => {
      console.log(data)
    })
  }
}
