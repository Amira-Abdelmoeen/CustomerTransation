import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchByAmountPipe } from './search-by-amount.pipe';
import { MyCartComponent } from './my-cart/my-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    SearchPipe,
    SearchByAmountPipe,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
