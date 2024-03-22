import { Component } from '@angular/core';
import { Customer } from '../types/customer';
import { CustomersService } from "../services/customers.services";
import { ActivatedRoute } from "@angular/router";
import { Router  } from '@angular/router';
import { InvoicesService } from '../services/invoices.services';

@Component({
    selector: 'app-invoice-add',
    standalone: false,
    template: `
    <h2>Créer une facture</h2>

    <app-invoice-form
        (onNewInvoice)="addInvoice($event.customerId, $event.cost, $event.state)"
    ></app-invoice-form>
      
    `,
    styles: []
  })

  export class InvoiceAddPageComponent {
    customer?: Customer;

    constructor(
      private route: ActivatedRoute, 
      private serviceCustomer: CustomersService,
      private serviceInvoice: InvoicesService,
      private router: Router 
      ){ }
    
   ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("idcustomer : "+ id)
    this.serviceCustomer
            .findOne(id)
            .subscribe(customers => this.customer = customers[0]);
    }
   
    addInvoice(customerId: number, cost: number, state :string) {
      console.log("idCustomer: "+customerId)
      this.serviceInvoice
      .create(Number(this.route.snapshot.paramMap.get('id')), cost, state)
      .subscribe();
      this.router.navigate(['/'+Number(this.route.snapshot.paramMap.get('id'))+'/details']);
    }

  }
  
