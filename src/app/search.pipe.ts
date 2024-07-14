import { Pipe, PipeTransform } from '@angular/core';
import { CustomerTransactions } from './customer-transactions';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Customers:CustomerTransactions[] , term:string):CustomerTransactions[]{
   if (term ==undefined || term=="" || term=="   " )
    {
      return Customers
    }
    return Customers.filter( (item)=>item.name.includes(term.toLowerCase()) ||item.amount.toString().includes(term) ) 
    
  }
  

}
