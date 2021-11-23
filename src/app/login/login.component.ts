import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner"
  accno = "Account number please"
  acno = ""
  pswd = ""


  constructor(private routerLogin: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);


  }
  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }
  login() {
    var acno = this.acno
    var pswd = this.pswd
    let result = this.ds.login(acno, pswd)
    if (result) {

      alert("Login Successful")
      this.routerLogin.navigateByUrl('home')
    }

  }
}
