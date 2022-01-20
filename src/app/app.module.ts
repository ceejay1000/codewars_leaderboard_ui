import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LanguageLeaderboardComponent } from './language-leaderboard/language-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ViewUsersComponent,
    UserDetailsComponent,
    AddUserComponent,
    HomeComponent,
    LanguageLeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
