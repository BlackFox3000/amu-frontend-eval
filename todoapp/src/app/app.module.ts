import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';

import { CustomerFormComponent } from './customer-form.component';
import { CustomersService } from './services/customers.services';
import { CustomerListPageComponent } from './pages/customer-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerListPageComponent
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
    HttpClientModule
  ],
  providers: [
    
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
