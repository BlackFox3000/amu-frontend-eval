// src/app/types/invoice.ts

// Représentons une tâche par tout objet qui aurait :
export type Invoice = {
    // Une propriété id numérique
    id: number;
    // Une propriété text de type number
    cost: number;
    // Une propriété done de type string
    state: string;
    // Une propriété done de type number
    customer: number;
}

export type Invoices = Invoice[];