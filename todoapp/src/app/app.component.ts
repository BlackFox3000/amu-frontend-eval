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
  constructor(private http: HttpClient){
     // Ayant obtenu l'instance de HttpClient, on peut l'utiliser
    // pour appeler Supabase en méthode GET. On peut tout de suite
    // indiquer à la méthode GET qu'elle doit s'attendre à recevoir un json
    // correspondant à un tableau de tâches (le fameux type Tasks).
    // On n'oubliera pas aussi de préciser pour cette requête HTTP
    // les entêtes importantes comme le Content-Type ou la clé API
    this.http.get<Customers>(config.supabaseUrl, {
      headers: {
        "Content-Type": "application/json",
        apiKey: config.supabaseApiKey
      }
  })
  // Lorsque la requête aura terminé son travail et que le serveur
  // aura répondu, nous recevrons une liste de tâches que
  // nous pourrons alors assigner à notre propriété "tasks"
  .subscribe((customers) => this.customers = customers)
  }

  // La méthode addTask recevra une string
  addCustomer(completeName: string, mail :string) {
   // Elle s'en servira pour créer une nouvelle tâche dans 
   // le tableau des tâches, et Angular mettra à jour 
   // l'affichage afin d'en tenir compte !
   this.customers.push({
      id: Date.now(),
      completeName: completeName,
      mail: mail
    });
  }
}
