import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signUpOrLogin = 'Sign Up'

  form: FormGroup;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.signIn(val.email, val.password)
        .subscribe(
          (res) => {
            console.log("User is logged in");
            this.authService.setInLocalStorage('accessToken', res.accessToken);
            this.authService.setInLocalStorage('user', val.email);
            this.router.navigateByUrl('/');
          }
        );
    }
  }

  signUp() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.signUp(val.email, val.password).subscribe(
        () => {
          console.log(`User ${val.email} has been created `);
          this.router.navigateByUrl('/');
        })
    }
  }

  switchLogin(): void {
    switch (this.signUpOrLogin) {
      case 'Sign Up':
        this.signUpOrLogin = 'Log In'
        break;
      case 'Log In':
        this.signUpOrLogin = 'Sign Up';
        break;
      default:
        this.signUpOrLogin = 'Sign Up';
        break;
    }
  }


}


