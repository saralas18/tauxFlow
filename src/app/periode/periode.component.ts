import { Component } from '@angular/core';

@Component({
  selector: 'app-periode',
  templateUrl: './periode.component.html',
  styleUrls: ['./periode.component.css']
})
export class PeriodeComponent {
  showDropdown = false;

  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


}
