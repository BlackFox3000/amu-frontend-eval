import { HttpClient } from "@angular/common/http";
import { config } from './config';

import { Component } from '@angular/core';
import { Customers } from './types/customer';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <div id="app">

    <h1>{{title}}</h1>
    <main>
      <app-customer-list 
        [customers]="customers"
      ></app-customer-list>

      <!-- TODO : Placer le formualire sur une nouvelle page -->
      <input type="button" value="Créer un client"
      onclick="console.log('TODO : page à créer')"/>

      <app-customer-form
        (onNewCustomer)="addCustomer($event.completeName, $event.mail)"
      ></app-customer-form>
      
    </main>
  </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'Gestionnaire de factures clients';
  customers: Customers = []
  constructor(private http: HttpClient){ }
  

 ngOnInit() {
    this.http.get<Customers>(config.supabaseUrl,{
      headers: {
        "Content-Type": "application/json",
        apiKey: config.supabaseApiKey
      }
    }) .subscribe((customers) => this.customers = customers)
  }
 
  addCustomer(completeName: string, mail :string) {
   // Elle s'en servira pour créer une nouvelle tâche dans 
   // le tableau des tâches, et Angular mettra à jour 
   // l'affichage afin d'en tenir compte !
  this.http.post<Customers>(
    config.supabaseUrl,
    {
      completeName: completeName,
      mail: mail
    },
    {
      headers:{
        "Content-Type":"application/json",
        apiKey:config.supabaseApiKey,
        Prefer: "return=representation"
      }
    }
  ).subscribe((customers) =>  this.customers.push(customers[0])
  );
  }
}
