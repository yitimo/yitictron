import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yitictron',
  encapsulation: ViewEncapsulation.None,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {
  constructor(
    private router: Router
  ) {}
  public routerCheck(url) {
    if (url === 'home') {
      return this.router.url === '/' || this.router.url.indexOf(url) >= 0;
    }
    return this.router.url.indexOf(url) >= 0;
  }
}
