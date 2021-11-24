import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  acno=""
  pswd=""
  amount=""
  acno1=""
  pswd1=""
  amount1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  Deposit(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
    let balance=this.ds.[acno].balance
    alert("Amount Deposited.Transaction Successful")
  }
  Withdraw(){
    alert("Amount has been debited successfully")
  }

}
