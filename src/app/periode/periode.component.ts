import { Component } from '@angular/core';

@Component({
  selector: 'app-periode',
  templateUrl: './periode.component.html',
  styleUrls: ['./periode.component.css']
})
export class PeriodeComponent {
  showDropdown = false;
 selectedMonthStart !: string;
 selectedMonthEnd !: string;
 ecriture =false;
  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  validerElement(){
    this.ecriture = true;
    const monthStart = new Date(this.selectedMonthStart).getMonth() + 1;
    const monthEnd = new Date(this.selectedMonthEnd).getMonth() + 1;

  }
  }


