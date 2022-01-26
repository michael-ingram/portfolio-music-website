import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  name = 'Michael Ingram';

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'contineer_page');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'contineer_page');
  }

}
