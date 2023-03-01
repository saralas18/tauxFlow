import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  showDropdown = false;
listeCategorie = ["Dépots banques","Prets de banques","Emplois clients","Depots clients","Engagement émis","Engagement recus"];
listeGroupe=["Escompte","Crédit exploitation","Prets équipement","Crédit immobilier","Préfinancement","Découvert"];
valeurSelectionneeCategorie !: string;
valeurSelectionneeGroupe !:string;
valider = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  validerElement() {
     this.valider = true;
  } 
  supprimerElement() {
    this.valeurSelectionneeGroupe = '';
  } 
}
