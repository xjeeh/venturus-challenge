import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'venturus-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
