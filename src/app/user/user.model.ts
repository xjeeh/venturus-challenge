export class User {

  constructor(public fullname: string = "",
    public email: string = "",
    public city: string = "",
    public rideInGroup: number = 0,
    public daysOfWeek = [],
    public registrationDate: number = Date.now()) {

  }

}
