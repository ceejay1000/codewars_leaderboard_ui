import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface leaderboard {
  username: string,
  clan: string,
  honour: number,
  languageRank: number,
  overallRank: number
}

@Component({
  selector: 'app-language-leaderboard',
  templateUrl: './language-leaderboard.component.html',
  styleUrls: ['./language-leaderboard.component.css']
})
export class LanguageLeaderboardComponent implements OnInit {



  leaderboardByLanguage!: leaderboard[];
  language: string = "scala"
  leaderboardByLanguageUrl = `http://localhost:8081/v1/leaderboard/${this.language}`

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.leaderboardByLanguageUrl).subscribe(response => {
      console.log(response)
    })
  }

  onSelect(language: string){
    console.log(language)
  
   this.leaderboardByLanguageUrl = `http://localhost:8081/v1/leaderboard/${language}`;
    console.log(this.leaderboardByLanguageUrl)
    this.http.get<leaderboard[]>(this.leaderboardByLanguageUrl).subscribe(response => {
      console.log(response)
      this.leaderboardByLanguage = response
    })
  }

}
