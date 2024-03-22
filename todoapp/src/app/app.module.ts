import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list.component';
import { CustomerFormComponent } from './customer-form.component';
import { CustomersService } from './services/customers.services';
import { CustomerListPageComponent } from './pages/customer-list-page.component';

import { InvoicesService } from './services/invoices.services';
import { InvoiceListPageComponent } from './pages/invoice-list-page.component';
import { InvoiceListComponent } from './invoice-list.component';
import { InvoiceFormComponent } from './invoice-form.component';
import { CustomerDetailsPageComponent } from './pages/customer-details-page.component';

// Ici, nous représentons les Routes, c'est une liste d'associations
// entre URLs et composants. Chaque URL donnera lieu à l'affichage 
// du composant qui lui est associé
const routes: Routes = [
  // La page d'accueil affichera la liste des tâches
  { path: '', component: CustomerListPageComponent },
  // Ici on utilise une URL paramétrée
  { path: ':id/details', component: CustomerDetailsPageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerListPageComponent,
    CustomerDetailsPageComponent,
    InvoiceListComponent,
    InvoiceFormComponent,
    InvoiceListPageComponent
  ],
  imports: [
    BrowserModule,
    // En important le ReactiveFormsModule, on importe des
    // composants, directives et services qu'il met à notre 
    // disposition !
    ReactiveFormsModule,
    // En important le HttpClientModule, on rend disponible dans notre 
    // application un service crucial, une instance de la classe HttpClient
    // On pourra utiliser cet objet dans nos composants pour effectuer
    // des requêtes HTTP :
    HttpClientModule,
    // On importe le RouterModule tout en lui donnant la configuration 
    // nécessaire (nos routes)
    RouterModule.forRoot(routes)
  ],
  providers: [
    CustomersService,
    InvoicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
