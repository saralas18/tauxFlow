import { Component } from '@angular/core';
import { VolumeEnCoursComponent } from '../volume-en-cours/volume-en-cours.component';

@Component({
  selector: 'app-hypothese',
  templateUrl: './hypothese.component.html',
  styleUrls: ['./hypothese.component.css']
})
export class HypotheseComponent {
  showDropdown = false;
  valeurLibelle !: string;
  displayedValues: string[] = [];



  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


  addValue() {
    this.displayedValues.push(this.valeurLibelle);
    this.valeurLibelle = ''; // Optionnel : pour vider l'input après chaque ajout
  }



  supprimerInput() {
    for (let i = this.displayedValues.length - 1; i >= 0; i--) {
      this.displayedValues.splice(i, 1);
    }    }
  }

