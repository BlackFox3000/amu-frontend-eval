import { Component } from '@angular/core';
import { Invoices } from '../types/invoice';
import { InvoicesService } from "../services/invoices.services";

@Component({
    selector: 'app-root',
    standalone: false,
    template: `
    <app-invoice-list 
        [invoices]="invoices"
      ></app-invoice-list>

    <app-invoice-form
        (onNewInvoice)="addInvoice($event.customerId, $event.cost, $event.state)"
    ></app-invoice-form>
      
    `,
    styles: []
  })

  export class InvoiceListPageComponent {
    invoices: Invoices = []

    constructor(private service: InvoicesService){ }
    
   ngOnInit() {
      this.service
        .findAll()
        .subscribe((invoices) => this.invoices = invoices)
    }
   
    addInvoice(customerId: number, cost: number, state :string) {
      this.service
      .create(customerId, cost, state)
      .subscribe((invoices) =>  this.invoices.push(invoices[0]));
    }

  }
  
