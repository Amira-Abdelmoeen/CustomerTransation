import { Pipe, PipeTransform } from '@angular/core';
import { CustomerTransactions } from './customer-transactions';

@Pipe({
  name: 'searchByAmount'
})
export class SearchByAmountPipe implements PipeTransform {

  transform(Customers:CustomerTransactions[] , term:string):CustomerTransactions[]{
    if (term ==undefined || term=="" || term=="   " )
     {
       return Customers
     }
     return Customers.filter( (item)=>item.date.match(term))
   }

}
