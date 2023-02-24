import { Component } from '@angular/core';
import { ValidationService } from '../validation-service';

@Component({
  selector: 'app-volume-en-cours',
  templateUrl: './volume-en-cours.component.html',
  styleUrls: ['./volume-en-cours.component.css']
})
export class VolumeEnCoursComponent {
volume !: string;
constructor(public validationService: ValidationService) { }
}
