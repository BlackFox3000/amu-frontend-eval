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
    <h2>Editer une facture</h2>

   Bientot disponible
   <a routerLink="/{{ idcustomer }}/details">Retour client</a>
    `,
    styles: []
  })

  export class InvoiceDetailPageComponent {
    customer?: Customer;
    idcustomer?: number;
    constructor(
      private route: ActivatedRoute, 
      private serviceCustomer: CustomersService,
      private serviceInvoice: InvoicesService,
      private router: Router
      ){ }
    
   ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('idcustomer'));
    this.idcustomer = id;
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
  
