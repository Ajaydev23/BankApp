import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = {
    1000: { acno: 1000, uname: "ajay", password: "1000", balance: 5000 },
    1001: { acno: 1001, uname: "faak", password: "1001", balance: 10000 },
    1002: { acno: 1002, uname: "slim", password: "1002", balance: 9000 }
  }

  constructor() { }
  register(acno: any, uname: any, password: any) {
    let database = this.data
    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      return true
    }

  }
  login(acno: any, pswd: any) {
    let database = this.data
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        return true;

      }
      else {
        alert("invalid password")
        return false;
      }
    }
    else {
      alert("invalid account number")
      return false;
    }
  }
  deposit(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let database = this.data
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        database[acno]["balance"] += amount
        return database[acno]["balance"];

      }
      else {
        alert("invalid password")
        return false;
      }
      return true;

    }
    else {
      alert("invalid account number")
      return false

    }

  }
  withdraw(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let database = this.data
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        if (database[acno]["balance"] > amount) {
          database[acno]["balance"] = database[acno]["balance"] - amount
          return database[acno]["balance"];
        }
        else {
          
          return false;
          alert("Insufficient balance")
        }

      }
      else {
        alert("invalid password")
        return false;
      }
      return true;

    }
    else {
      alert("invalid account number")
      return false

    }

  }

}
