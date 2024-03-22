import { Component } from '@angular/core';


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
}
