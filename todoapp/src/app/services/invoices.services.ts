// src/app/api/customers.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices } from "../types/invoice";
import { configCustomer, configInvoice } from "../config";

const SUPABASE_URL = configInvoice.supabaseUrl;
const SUPABASE_API_KEY = configInvoice.supabaseApiKey;

@Injectable()
export class InvoicesService {

    /**
     * Dans ce service, nous allons envoyer des requêtes HTTP, nous demanderons donc
     * au système d'injection de dépendances d'Angular de nous injecter une instance du HttpClient
     */
    constructor(private http: HttpClient) { }

    /**
     * Récupère l'ensemble des lignes de l'API et retourne un tableau de clients
     */
    findAll(): Observable<Invoices> {
        return this.http.get<Invoices>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    findList(customerId: number): Observable<Invoices> {
        return this.http.get<Invoices>(SUPABASE_URL + '?customer=eq.' + customerId, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    // /**  Inutile ici TODO mettre en place
    //  * Met à jour le statut d'une tâche et retourne la tâche mise à jour (dans un tableau contenant une tâche)
    //  */
    // toggleDone(id: number, isDone: boolean): Observable<Customers> {
    //     return this.http.patch<Customers>(SUPABASE_URL + '?id=eq.' + id, {
    //         done: isDone
    //     }, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             apiKey: SUPABASE_API_KEY,
    //             Prefer: "return=representation"
    //         }
    //     });
    // }

    /**
     * Créé un client auprès de l'API qui nous retournera un tableau contenant le client
     * nouvellement créé
     */
    create(customerId: number,cost: number, state: string): Observable<Invoices> {
        return this.http.post<Invoices>(SUPABASE_URL, {
            customerId: customerId,
            cost: cost,
            state: state
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }
}