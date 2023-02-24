import { Component } from '@angular/core';
import { ValidationService } from '../validation-service';
@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent {
  taux=true;
  constructor(public validationService: ValidationService) { }


}
