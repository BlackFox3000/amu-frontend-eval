// src/app/api/customers.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customers } from "../types/customer";
import { configCustomer } from "../config";

// Commençons par factoriser sur 2 constantes les URLs et
// clé d'API de SUPABASE histoire de ne pas avoir à les 
// répéter pour chaque appel à l'API :
const SUPABASE_URL = configCustomer.supabaseUrl;
const SUPABASE_API_KEY = configCustomer.supabaseApiKey;

// Nous créons un service, c'est un objet que l'on pourra utiliser
// au sein de nos composants ou même dans d'autres services ! Afin de ne pas avoir à instancier
// nous même ce service lorsqu'on en aura besoin, on peut s'appuyer sur Angular pour l'instancier
// pour nous à la demande : Merci Angular DI (Dependency Injection) System !
// Pour indiquer à Angular qu'il devra se charger de l'instanciation de cette classe, on utilise le
// décorateur @Injectable() :
@Injectable()
export class CustomersService {

    /**
     * Dans ce service, nous allons envoyer des requêtes HTTP, nous demanderons donc
     * au système d'injection de dépendances d'Angular de nous injecter une instance du HttpClient
     */
    constructor(private http: HttpClient) { }

    /**
     * Récupère l'ensemble des lignes de l'API et retourne un tableau de clients
     */
    findAll(): Observable<Customers> {
        return this.http.get<Customers>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    findOne(id: number): Observable<Customers> {
        return this.http.get<Customers>(SUPABASE_URL + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: configCustomer.supabaseApiKey,
                Prefer: "return=representation"
            }
        });
    }

    /**
     * Créé un client auprès de l'API qui nous retournera un tableau contenant le client
     * nouvellement créé
     */
    create(fullName: string, email: string): Observable<Customers> {
        return this.http.post<Customers>(SUPABASE_URL, {
            fullName: fullName,
            email: email
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }
}