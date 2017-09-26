import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'venturus-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'venturus';
}
