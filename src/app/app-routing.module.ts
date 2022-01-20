import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LanguageLeaderboardComponent } from './language-leaderboard/language-leaderboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "user-details/:name", component: UserDetailsComponent,
  },
  {
    path: "leaderboard", component: ViewUsersComponent
  },
  {
    path: "add-user", component: AddUserComponent
  }, 
  {
    path: "leaderboard-by-language", component: LanguageLeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
