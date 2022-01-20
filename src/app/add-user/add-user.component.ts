import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('addUserForm') addUserForm!: NgForm;
  username!: string;
  addUserUrl = 'http://localhost:8081/v1/leaderboard/add'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addUserForm)
    if (
      this.addUserForm.form.status === "INVALID" && 
      this.addUserForm.form.touched === true){
        console.log("Field is required")
        return;
    }

    this.username = this.addUserForm.form.value.username;
  
    this.http.post(this.addUserUrl, {username: this.username}).subscribe(response => {
      console.log(response)
      if (response === true){
        alert("User added successfully :)");
      }
    })
  }

}
