import { Component } from '@angular/core';
import { ValidationService } from '../validation-service';

@Component({
  selector: 'app-renegocition',
  templateUrl: './renegocition.component.html',
  styleUrls: ['./renegocition.component.css']
})
export class RenegocitionComponent {
renego=true;
constructor(public validationService: ValidationService) { }

}
