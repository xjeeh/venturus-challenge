import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API_URL } from '../app.api-url'

import { User } from './user.model'

@Injectable()
export class UserService {
  users: User[] = []

  constructor(private http: Http) { }


  getUsers(): Observable<User[]> {
    return this.http.get(`${API_URL}/users`)
      .map(response => response.json())
  }

  clear() {
    this.users = []
  }

  addItem(item: User) {
    this.users.push(new User(item.fullname, item.email, item.city, item.rideInGroup, item.daysOfWeek))
  }

  removeItem(user: User) {
    this.users.splice(this.users.indexOf(user), 1)
  }

}
