// src/app/types/cutomer.ts

// Représentons une tâche par tout objet qui aurait :
export type Customer = {
    // Une propriété id numérique
    id: number;
    // Une propriété text de type string
    fullName: string;
    // Une propriété done de type string
    email: string;
}

export type Customers = Customer[];