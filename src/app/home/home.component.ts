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
    var result=this.ds.deposit(acno,pswd,amount)
    if(result){
    alert("Amount Deposited.Transaction Successful.New balance="+result)
    }
    else{
      alert("Transaction failed")
    }
  }
  Withdraw(){
    var acno=this.acno1
    var pswd=this.pswd1
    var amount=this.amount1
    var result=this.ds.withdraw(acno,pswd,amount)
    if(result){
    alert("Amount Debited.Transaction Successful.New balance="+result)
    }
    else{
      alert("Transaction failed")
    }
  }

}
