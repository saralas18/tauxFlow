import { Component } from '@angular/core';

@Component({
  selector: 'app-hypothese',
  templateUrl: './hypothese.component.html',
  styleUrls: ['./hypothese.component.css']
})
export class HypotheseComponent {
  showDropdown = false;
  valeurLibelle !: string;
 

  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


  nouveauComposantVisible = false;
  ecriture = false ;

  afficherNouveauComposant() {
   
    this.nouveauComposantVisible = true;
    this.ecriture = true;
  }
  supprimerInput() {
    this.valeurLibelle = '';
    this.nouveauComposantVisible = false;
  }
}
