import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Concert} from "../models/concert.model";
import {Observable, throwError} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {

  apiUrl = 'https://michael-ingram-band-backend.herokuapp.com'

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllConcerts(): Observable<any>{
    return this.http.get<Concert[]>(`${this.apiUrl}/concerts`)
  }

  getConcertById(id: string): Observable<any> {
    return this.http.get<Concert>(`${this.apiUrl}/concerts/${id}`)
  }

  createConcert(date: string, time: string, venue: string, city: string, state: string, guest: string): Observable<any> {
    const bearerToken = this.authService.getFromLocalStorage('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}` })
    };
    const show: Concert = {date, time, venue, city, state, guest}
    console.log('show: ', show);
    console.log('token', bearerToken);
    return this.http.post(`${this.apiUrl}/concerts`, show, httpOptions);
  }

  updateConcert(id: string, date: string, time: string, venue: string, city: string, state: string, guest: string): Observable<any> {
    const bearerToken = this.authService.getFromLocalStorage('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}` })
    };
    const newShow: Concert = {date, time, venue, city, state, guest}
    return this.http.patch(`${this.apiUrl}/concerts/${id}`, newShow, httpOptions)
  }

  deleteConcertById(id: string): Observable<any> {
    const bearerToken = this.authService.getFromLocalStorage('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}` })
    };
    console.log(bearerToken);
    console.log(id);
    return this.http.delete(`${this.apiUrl}/concerts/${id}`, httpOptions);
  }
}
