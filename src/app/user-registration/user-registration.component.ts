import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../user/user.model'
import { UserService } from '../user/user.service'


@Component({
  selector: 'venturus-user-registration',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {

  options = {
    rideInGroup: [
      { 'value': 0, 'description': 'always' },
      { 'value': 1, 'description': 'sometimes' },
      { 'value': 2, 'description': 'never' }],
    daysOfWeek: [
      { 'value': 0, 'description': 'sun' },
      { 'value': 1, 'description': 'mon' },
      { 'value': 2, 'description': 'tue' },
      { 'value': 3, 'description': 'wed' },
      { 'value': 4, 'description': 'thu' },
      { 'value': 5, 'description': 'fri' },
      { 'value': 6, 'description': 'sat' }]
  }

  user: User = new User()


  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  checkRide(item) {
    this.user.rideInGroup = item.value
  }

  checkDay(day) {
    if (this.user.daysOfWeek.indexOf(day) >= 0)
      this.user.daysOfWeek.splice(this.user.daysOfWeek.indexOf(day), 1)
    else
      this.user.daysOfWeek.push(day)
  }

  addItem(user: any) {
    // Sort daysOfWeek in a crescent order
    this.user.daysOfWeek = this.user.daysOfWeek.sort()
    this.userService.addItem(this.user)
    this.user = new User()
  }

  clear() {
    this.user = new User()
  }

}
