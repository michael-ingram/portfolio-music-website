import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://michael-ingram-band-backend.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<any> {
    let role: string;
    email.toLowerCase() === 'micha.j.ingram@gmail.com' ? role = 'ADMIN' : role = 'USER';
    const user: User = {email, password, role};
    return this.http.post<User>(`${this.apiUrl}/auth/signup`, user);
  }

  signIn(email: string, password: string): Observable<any> {
    let role: string;
    email.toLowerCase() === 'micha.j.ingram@gmail.com' ? role = 'ADMIN' : role = 'USER';
    const user: User = {email, password, role};
    this.setInLocalStorage('role', role);
    return this.http.post<User>(`${this.apiUrl}/auth/signin`, user)
  }

  logout(){
    this.removeFromLocalStorage('accessToken');
    this.removeFromLocalStorage('user');
    this.removeFromLocalStorage('role');
  }

  setInLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getFromLocalStorage(key: string){
    return localStorage.getItem(key);
  }

  removeFromLocalStorage(key: string): void{
    localStorage.removeItem(key);
  }


}
