import { Component, OnInit } from '@angular/core';
import { GoogleApiService, UserInfo } from 'src/app/google-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService) { 
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

}
