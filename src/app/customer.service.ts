import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClint:HttpClient) { }

  public GetCustomer()
{
   let data = this.httpClint.get<any>("http://localhost:3000/customers")
   return data;
}

public GetCustomerTransiction(id:number)
{
   let Transictions = this.httpClint.get<any>(`http://localhost:3000/transactions?customer_id=${id}`)
   return Transictions;
}



}
