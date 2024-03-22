// src/app/customer-list.component.ts

import { Component, Input } from "@angular/core";
import { Customers } from '../types/customer';


@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-customer-list> sera rencontré dans
    // un template HTML
    selector: 'app-customer-list',
    // Le HTML reprend ici notre liste de tâches
    template: `
    <button routerLink="/create">Créer un client</button>
    <ul>
        <li *ngFor="let item of customers" 
            style="display: flex;
            justify-content: space-between; 
            align-items: center;
            margin-right: 10px;">
        <span>
            {{ item.completeName }}
        </span>
        <span>
            {{ item.mail }}
        </span>
        <a routerLink="/{{ item.id }}/details">Details</a>
        
        </li>
    </ul>
    `,
})
export class CustomerListComponent {
    // Le décorateur Input permet de spécifier à Angular
    // que cette donnée tasks pourra être renseignée depuis
    // l'extérieur du composant. Par défaut, le tableau sera vide
    // mais il prendra la valeur qu'on lui donne depuis l'extérieur
    // si c'est le cas
    @Input()
    customers : Customers = [];
}