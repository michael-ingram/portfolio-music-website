import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'contineer_page');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'contineer_page');
  }

}
