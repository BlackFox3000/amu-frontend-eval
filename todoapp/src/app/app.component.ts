import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <div id="app" >

    <h1><a routerLink="/">{{title}}</a></h1>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
    
  `,
  styles: []
})

export class AppComponent {
  title = '💰 Gestionnaire de factures clients 💰';
}
