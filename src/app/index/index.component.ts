import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router:Router
    ) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);


      if(this.socialUser)
      {
        var data ={
          id:this.socialUser.id,
          name:this.socialUser.name,
          email:this.socialUser.email,
          photoUrl: this.socialUser.photoUrl
        }

        localStorage.setItem('user',JSON.stringify(data));

        this.router.navigate(['home']);
      }
      console.log(this.socialUser)
    });
  }
  loginWithGoogle(): void {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
