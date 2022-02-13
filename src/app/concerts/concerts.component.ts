import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Concert} from "../models/concert.model";
import {ConcertsService} from "../services/concerts.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit, OnDestroy {

  concertForm: FormGroup;

  concerts: Concert[] = [];
  error = null;
  isAdmin = false;

  constructor(private renderer: Renderer2, private concertService: ConcertsService, private fb: FormBuilder, private authService: AuthService) {
    this.renderer.addClass(document.body, 'contineer_page');
    this.concertForm = this.fb.group({
      date: ['',Validators.required],
      time: ['',Validators.required],
      venue: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      guest: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.authService.getFromLocalStorage('role') === 'ADMIN'){
      this.isAdmin = true;
    }
    this.concertService.getAllConcerts().subscribe(concerts => {
      console.log(concerts);
      this.concerts = concerts;
    }, error => {
      this.error = error.message
    });

  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'contineer_page');
  }

  createShow(){
    const newShow = this.concertForm.value;
    console.log(newShow);
    this.concertService.createConcert(newShow.date, newShow.time, newShow.venue, newShow.city, newShow.state, newShow.guest).subscribe(
      (res) => {
        console.log(res);
      }
    )
    location.reload();
  }

  updateShow(id: string | undefined, date: string, time: string, venue: string, city: string, state: string, guest: string) {
    if (id !== undefined){
      this.concertService.updateConcert(id, date, time, venue, city, state, guest ).subscribe( res => {
        console.log(res);
      })
    } else {
      console.log(`${id} not found`);
    }
    location.reload();
  }

  deleteShow(id: string | undefined){
    console.log(id);
    if (id !== undefined){
      this.concertService.deleteConcertById(id).subscribe(res => {
        console.log(res)
      })
    } else {
      console.log(`${id} not found`);
    }
    location.reload();
  }

}
