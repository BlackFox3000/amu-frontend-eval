// src/app/invoice-list.component.ts

import { Component, Input } from "@angular/core";
import { Invoices } from "../types/invoice";
import { ActivatedRoute } from "@angular/router";
import { Customer } from "../types/customer";
import { CustomersService } from "../services/customers.services";

@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-invoice-list> sera rencontré dans
    // un template HTML
    selector: 'app-invoice-list',
    // Le HTML reprend ici notre liste de tâches
    template: `
    <ng-container *ngIf="customer">
        <button routerLink="/{{customer.id}}/invoices/add">Créer une facture</button>
        <ul>
        <ng-container *ngIf="invoices && invoices.length >0">
            <li *ngFor="let item of invoices" 
                style="display: flex;
                justify-content: space-between; 
                align-items: center;
                margin-right: 10px;">
            <span>
                {{ item.cost }} €
            </span>
            <span>
                {{ item.state }}
            </span>
            <a routerLink="/{{ item.customer }}/invoices/{{ item.id }}">Détails</a>
            
            </li>
            </ng-container>
        </ul>
    </ng-container>

    <p *ngIf="!customer">Client inconnu.</p>
    `,
})
export class InvoiceListComponent {
    // Le décorateur Input permet de spécifier à Angular
    // que cette donnée tasks pourra être renseignée depuis
    // l'extérieur du composant. Par défaut, le tableau sera vide
    // mais il prendra la valeur qu'on lui donne depuis l'extérieur
    // si c'est le cas
    @Input()
    invoices : Invoices = [];

    constructor(
        private route: ActivatedRoute,
        private serviceCustomer: CustomersService,
    ){}

    customer?: Customer;

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.serviceCustomer
            .findOne(id)
            .subscribe(customers => this.customer = customers[0]);    

        console.log(this.invoices)    
    }
}