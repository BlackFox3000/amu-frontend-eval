// src/app/invoice-list.component.ts

import { Component, Input } from "@angular/core";
import { Invoices } from "./types/invoice";


@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-invoice-list> sera rencontré dans
    // un template HTML
    selector: 'app-invoice-list',
    // Le HTML reprend ici notre liste de tâches
    template: `
    <ul>
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
        <input type="button" id="item-{{ item.id }}" value="Modifier"/>
        
        </li>
    </ul>
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
}