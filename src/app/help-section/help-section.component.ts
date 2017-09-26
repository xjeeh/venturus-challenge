import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'venturus-help-section',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './help-section.component.html',
  styleUrls: ['./help-section.component.scss']
})
export class HelpSectionComponent implements OnInit {

  isOpened:boolean = false

  constructor() { }

  ngOnInit() {
  }

  showHelp():void{
    this.isOpened = !this.isOpened;
  }

}
