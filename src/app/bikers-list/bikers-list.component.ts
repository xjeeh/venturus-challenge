import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user/user.model'
import { UserService } from '../user/user.service'

@Component({
  selector: 'venturus-bikers-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bikers-list.component.html',
  styleUrls: ['./bikers-list.component.scss']
})
export class BikersListComponent implements OnInit {

  public users: User[] = []

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.userService.users = users)
  }

  removeItem(item: any) {
    this.userService.removeItem(item)
  }


  rideInGroupFormatted(rideInGroup: number): string {
    switch (rideInGroup) {
      case 0:
        return "Always"
      case 1:
        return "Sometimes"
      case 2:
        return "Never"
    }
  }

  public daysOfWeekFormatted(daysOfWeek: any): string {

    let sun = daysOfWeek.indexOf(0) >= 0
    let mon = daysOfWeek.indexOf(1) >= 0
    let tue = daysOfWeek.indexOf(2) >= 0
    let wed = daysOfWeek.indexOf(3) >= 0
    let thu = daysOfWeek.indexOf(4) >= 0
    let fri = daysOfWeek.indexOf(5) >= 0
    let sat = daysOfWeek.indexOf(6) >= 0

    if (daysOfWeek.length >= 6)
      return "Everyday"
    if (sat && sun)
      return "Weekends"
    if (mon && tue && wed && thu && fri)
      return "Week days"

    else {
      var days = []
      daysOfWeek.forEach(function (item) {
        switch (item) {
          case 0: days.push(`Sun`); break;
          case 1: days.push(`Mon`); break;
          case 2: days.push(`Tue`); break;
          case 3: days.push(`Wed`); break;
          case 4: days.push(`Thu`); break;
          case 5: days.push(`Fri`); break;
          case 6: days.push(`Sat`); break;
        }
      })
      return days.join(', ')

    }

  }

}
