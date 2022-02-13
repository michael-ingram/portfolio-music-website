import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Michael Ingram';

  isLoggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getFromLocalStorage('user')) {
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.authService.logout();
    location.reload();
  }
}
