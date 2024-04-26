import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

  num1 : any = "";
  resultat : string = "";

  milesToFot(): void {
    this.resultat = `${this.num1} miles motsvarar ${this.num1 * 5280} fot`;
  }

  fotToMiles(): void {
    this.resultat = `${this.num1} fot motsvarar ${this.num1 / 5280} miles`;
  }

  celsiusToFahren(): void {
    this.resultat = `${this.num1} Celsius motsvarar ${9/5 * this.num1 + 32} Fahrenheit `;
  }

  fahrenToCelsius() : void {
    this.resultat = `${this.num1} Fahrenheit motsvarar ${(5/9) * (this.num1 - 32)} Celsius`;
  }


}


