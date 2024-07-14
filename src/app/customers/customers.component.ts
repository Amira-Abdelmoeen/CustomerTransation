import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerTransactions } from '../customer-transactions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

 CustomerList: any  = [];
 Transiction: any  = [];

 inputSearch:string =""



 CustomerTransaction : CustomerTransactions[] = []

 ngOnInit(): void {
 
  this.getCustomer();
  

 }


constructor(private customerService:CustomerService){}
 
getCustomer(){
  this.customerService.GetCustomer().subscribe
  (
    res  =>{
      this.CustomerList = res;
      for (let i = 0; i < this.CustomerList.length; i++) {
        this.getTransictionByCustomerId(this.CustomerList[i].id,this.CustomerList[i].name)
      }
    }
  )
}

getTransictionByCustomerId(id:number ,CustomerName:string){
  this.customerService.GetCustomerTransiction(id).subscribe
  (
    res  =>{
      this.Transiction = res;
      for (let i = 0; i < this.Transiction.length; i++) {
      let customerAll = new CustomerTransactions(CustomerName,this.Transiction[i].date,this.Transiction[i].amount)

      this.CustomerTransaction.push(customerAll)
        
      }
    }

  )
}






}
