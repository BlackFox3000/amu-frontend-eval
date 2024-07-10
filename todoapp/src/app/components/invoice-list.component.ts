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
        <button routerLink="/{{ customer.id }}/invoices/add">Créer une facture</button>
        <table>
            <thead>
                <tr>
                    <th scope="col">Montant</th>
                    <th scope="col">Status</th>
                    <th scope="col">Détails</th>
                </tr>
            </thead>
            <tbody>
                <ng-container *ngIf="invoices && invoices.length >0">
                    <tr *ngFor="let item of invoices" >
                    <td>
                        {{ item.cost }} €
                    </td>
                    <td *ngIf="item.state === 'PAID'">
                        payée
                    </td>
                    <td *ngIf="item.state === 'SENT'">
                        envoyée
                    </td>
                    <td>
                    <a routerLink="/{{ item.customer }}/invoices/{{ item.id }}">Détails</a>
                    </td>
                    </tr>
                </ng-container>
            </tbody>
        </table>
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