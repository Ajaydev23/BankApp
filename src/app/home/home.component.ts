import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  acno=""
  pswd=""
  amount=""

  constructor() { }

  ngOnInit(): void {
  }
  Deposit(){
    alert("Amount Deposited.Transaction Successful")
  }
  Withdraw(){
    alert("Amount has been debited successfully")
  }

}
