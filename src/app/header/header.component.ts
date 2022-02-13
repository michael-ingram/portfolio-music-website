import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getFromLocalStorage('user')) {
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.authService.logout();
  }

}
