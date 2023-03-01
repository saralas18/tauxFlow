import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent {
  showDropdown = false;
  valeurLibelleDebut !: string;
  valeurLibelleFin !: string;
  ecrire = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
validerElement(){
this.ecrire=true;
}
}
