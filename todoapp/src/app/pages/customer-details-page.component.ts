// src/app/pages/customer-details-page.component.ts

import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Customer } from "../types/customer";
import { CustomersService } from "../services/customers.services";
import { Invoices } from "../types/invoice";
import { InvoicesService } from "../services/invoices.services";


@Component({
    selector: 'app-customer-details-page',
    standalone: false,
    template: `
        <ng-container *ngIf="customer">
            <h2>
                Fiche de {{ customer.completeName }}
            </h2>
            <h3>({{customer.mail}})</h3>
            
            <app-invoice-list 
                [invoices]="invoices"
            ></app-invoice-list>

            <br />
            <a routerLink="/">Retour accueil</a>
        </ng-container>

        <p *ngIf="!customer">En cours de chargement</p>
    `
})
export class CustomerDetailsPageComponent { 
    invoices: Invoices = [];

    customer?: Customer;

    constructor(
        private route: ActivatedRoute, 
        private serviceCustomer: CustomersService,
        private serviceInvoice: InvoicesService){ }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.serviceCustomer
            .findOne(id)
            .subscribe(customers => this.customer = customers[0]);
            
        this.serviceInvoice
            .findList(id)
            .subscribe(invoices =>{
                if (invoices && invoices.length > 0 && invoices[0]) {
                    this.invoices= invoices; 
                }
            } );    
    }


    // /**
    //  * Récupère les tâches dont l'identifiant correspond
    //  */
    // findOne(id: number): Observable<Customers> {
    //     return this.http.get<Customers>(configCustomer.supabaseUrl + '?id=eq.' + id, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             apiKey: configCustomer.supabaseApiKey,
    //             Prefer: "return=representation"
    //         }
    //     });
}