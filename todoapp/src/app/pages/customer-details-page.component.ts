// src/app/pages/customer-details-page.component.ts

import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Customer } from "../types/customer";
import { configCustomer } from "../config";

@Component({
    selector: 'app-customer-details-page',
    template: `
        <p>Ca fonctionne !</p>
    `
})
export class CustomerDetailsPageComponent { 
     // On demande à Angular de nous injecter une instance
    // de la classe ActivatedRoute qui représente la route
    // actuelle et tous ses détails 
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // On peut récupérer le paramètre "id" qui se trouve
        // dans l'URL, et le transformer en nombre :
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        // Affichons l'id dans la console pour s'assurer que cela fonctionne
        console.log("Affichons ", id);
    }

    // /**
    //  * Récupère les tâches dont l'identifiant correspond
    //  */
    // findOne(id: number): Observable<Customers> {
    //     return this.http.get<Customers>(configCustomer.supabaseUrl + '?id=eq.' + id, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             apiKey: configCustomer.supabaseApiKey,
    //             Prefer: "return=representation"
    //         }
    //     });
}