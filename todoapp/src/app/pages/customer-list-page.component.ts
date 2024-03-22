import { Component } from '@angular/core';
import { Customers } from '../types/customer';
import { CustomersService } from "../services/customers.services";

@Component({
    selector: 'app-root',
    standalone: false,
    template: `
    <app-customer-list 
        [customers]="customers"
      ></app-customer-list>

    <app-customer-form
        (onNewCustomer)="addCustomer($event.completeName, $event.mail)"
    ></app-customer-form>
      
    `,
    styles: []
  })

  export class CustomerListPageComponent {
    customers: Customers = []

    constructor(private service: CustomersService){ }
    
   ngOnInit() {
      this.service
        .findAll()
        .subscribe((customers) => this.customers = customers)
    }
   
    addCustomer(completeName: string, mail :string) {
      this.service
      .create(completeName, mail)
      .subscribe((customers) =>  this.customers.push(customers[0]));
    }

  }
  
