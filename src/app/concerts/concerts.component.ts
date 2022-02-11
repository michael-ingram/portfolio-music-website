import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Concert} from "../models/concert.model";

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit, OnDestroy {

  guest: boolean = false;

  concerts: Concert[] = [];

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'contineer_page');
  }

  ngOnInit(): void {
    const show: Concert = {
      date: 'March 2nd, 2022',
      time: '9pm',
      venue: 'Spur Bar and Grill',
      city: 'Park City',
      state: 'UT',
      guests: 'Skylar Geer'
    }
    show.guests !== ''? this.guest = true : this.guest = false;
    this.concerts.push(show);

    const show2: Concert = {
      date: 'March 30th, 2022',
      time: '9pm',
      venue: 'Spur Bar and Grill',
      city: 'Park City',
      state: 'UT',
      guests: 'Skylar Geer'
    }
    show2.guests !== ''? this.guest = true : this.guest = false;
    this.concerts.push(show2);

    const show3: Concert = {
      date: 'May 7th, 2022',
      time: '4pm',
      venue: 'Echo Rv Resort',
      city: 'Coalville',
      state: 'UT',
      guests: 'Skylar Geer Band'
    }
    show3.guests !== ''? this.guest = true : this.guest = false;
    this.concerts.push(show3);
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'contineer_page');
  }

}
