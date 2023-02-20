import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  showDropdown = false;
  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
