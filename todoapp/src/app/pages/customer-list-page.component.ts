import { Component } from '@angular/core';
import { Customers } from '../types/customer';
import { CustomersService } from "../services/customers.services";

@Component({
    selector: 'app-root',
    standalone: false,
    template: `
    <h2>🧑‍💼 Liste de client 🧑‍💼</h2>
    <app-customer-list 
        [customers]="customers"
      ></app-customer-list>
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
   
  }
  
