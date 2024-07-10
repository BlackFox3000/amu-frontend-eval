import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './components/customer-list.component';
import { CustomerFormComponent } from './components/customer-form.component';
import { CustomersService } from './services/customers.services';
import { CustomerListPageComponent } from './pages/customer-list-page.component';

import { InvoicesService } from './services/invoices.services';
import { InvoiceListPageComponent } from './pages/invoice-list-page.component';
import { InvoiceListComponent } from './components/invoice-list.component';
import { InvoiceFormComponent } from './components/invoice-form.component';
import { CustomerDetailsPageComponent } from './pages/customer-details-page.component';
import { CustomerAddPageComponent } from './pages/customer-add-page.component';
import { InvoiceAddPageComponent } from './pages/invoice-add-page.component';
import { InvoiceDetailPageComponent } from './pages/invoice-detail-page.component';

// Ici, nous représentons les Routes, c'est une liste d'associations
// entre URLs et composants. Chaque URL donnera lieu à l'affichage 
// du composant qui lui est associé
const routes: Routes = [
  // La page d'accueil affichera la liste des tâches
  { path: '', component: CustomerListPageComponent },
  // La page d'accueil affichera la liste des tâches
  { path: 'create', component: CustomerAddPageComponent },
  // Ici on utilise une URL paramétrée
  { path: ':id', component: CustomerDetailsPageComponent },
  // Ici on utilise une URL paramétrée
  { path: ':id/invoices/add', component: InvoiceAddPageComponent },
  // Ici on utilise une URL paramétrée
  { path: ':idcustomer/invoices/:idinvoice', component: InvoiceDetailPageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerListPageComponent,
    CustomerDetailsPageComponent,
    CustomerAddPageComponent,
    InvoiceListComponent,
    InvoiceFormComponent,
    InvoiceListPageComponent,
    InvoiceFormComponent,
    InvoiceAddPageComponent,
    InvoiceDetailPageComponent
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
