// src/app/customer-form.component.ts

import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-customer-form",
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="form" style="display: flex; flex-wrap: wrap;">
            <input 
              type="text" 
              formControlName="fullName"
              name="fullName" 
              placeholder="Nom du client" 
              style="flex: 1; margin-right: 10px; margin-bottom: 10px;"
            />

            <input 
            type="text" 
            formControlName="email"
            name="email" 
            placeholder="Mail du client" 
            style="flex: 1; margin-right: 10px; margin-bottom: 10px;"
          />
            <button style="flex: 1; margin-right: 10px; margin-bottom: 10px;"
            >Enregistrer</button>
        </form>
    `
})
export class CustomerFormComponent {
    
     // Le décorateur @Output permet de signaler à Angular 
    // que notre composant va pouvoir faire sortir une information
    // vers l'exéterieur sous a forme d'un événément !
    // Et pour émettre un événement, on utilise une instance
    // de la classe EventEmitter tout en précisant que l'information
    // qui sera émise sera une string (le texte tapé dans le formulaire !) :
    @Output()
    onNewCustomer = new EventEmitter<{ fullName: string, email: string }>();


    // Notre formulaire sera représenté par la propriété "form"
    // Elle contient une instance d'un FormGroup (groupe de champs)
    // qui lui même ne contient qu'un seul champ appelé "text" et qui
    // sera représenté par une instance de FormControl
    // Ces deux classes (FormGroup et FormControl) vont nous donner 
    // toutes les fonctionnalités nécessaires à gérer des champs de 
    // formulaires et en extraire les données !
    form = new FormGroup({
        fullName: new FormControl(),
        email: new FormControl()
    });

    onSubmit() {
        console.log(this.form.value);
        // Au moment de la soumission, on va déclencher un événement
        // Et la donnée que l'on va émettre sera la valeur du champ 
        // "text" qui se trouve dans notre formulaire !
        this.onNewCustomer.emit(
            {
                fullName: this.form.value.fullName,
                email : this.form.value.email
            });

        // On pourra même réinitialiser la valeur du formulaire
        // une fois que le traitement sera terminé :
        this.form.setValue({
            fullName: '',
            email: '',
        });
    }
}