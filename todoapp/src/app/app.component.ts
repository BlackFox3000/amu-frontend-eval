import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <div id="app" >

    <h1>{{title}}</h1>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
    
  `,
  styles: []
})

export class AppComponent {
  title = 'Gestionnaire de factures clients';
}
