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

  addValue() {
    this.displayedValues.push(this.valeurLibelle);
    this.valeurLibelle = ''; // Optionnel : pour vider l'input après chaque ajout
  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }



  supprimerInput(value: string)
  {
    const index = this.displayedValues.indexOf(value);
    if (index !== -1) {
      this.displayedValues.splice(index, 1);
    }
  }
}
