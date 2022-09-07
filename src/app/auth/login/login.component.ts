import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { GoogleApiService, UserInfo } from 'src/app/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mailSnippets: string[] = []
  userInfo?: UserInfo

  constructor(
    private readonly googleApi: GoogleApiService,
    private router: Router
  ) { 
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  ngOnInit(): void {
  }

  loginGoogle(){
    this.googleApi.GLogin()
    // this.router.navigate(['/home'])
    
  }

}
