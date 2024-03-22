import { HttpClient } from "@angular/common/http";
import { configCustomer } from './config';

import { Component } from '@angular/core';
import { Customers } from './types/customer';

import { CustomersService } from "./services/customers.services";

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <div id="app">

    <h1>{{title}}</h1>
    <main>
       <!-- TODO : Placer le formualire sur une nouvelle page -->
      <input type="button" value="Créer un client"
      onclick="console.log('TODO : page à créer')"/>

    </main>
  </div>
    
  `,
  styles: []
})

export class AppComponent {
  title = 'Gestionnaire de factures clients';
  customers: Customers = []
  constructor(private http: HttpClient, private service: CustomersService){ }
  

 ngOnInit() {
    // On remplace le code de la requête HTTP par l'appel
    // à la méthode findAll() de notre service, qui renverra
    // exactement la même chose que ce que renvoyait le
    // HttpClient, on réagira donc de la même manière via la 
    // méthode subscribe()
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
