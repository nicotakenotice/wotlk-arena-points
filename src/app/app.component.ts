import { Component } from '@angular/core';
import { isNullOrUndefined } from 'util';

const basePoints2s: number = 261;
const basePoints3s: number = 303;
const basePoints5s: number = 344;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Arena Points';
  currentYear: number = new Date().getFullYear();

  points2s: number = basePoints2s;
  points3s: number = basePoints3s;
  points5s: number = basePoints5s;
  invalidInput: boolean = false;

  valueChanged(value: string): void {
    let valueNumber = Number(value);
    console.log(valueNumber);
    if (isNaN(valueNumber) || typeof valueNumber !== "number") this.invalidInput = true;
    else {
      this.invalidInput = false;
      if (valueNumber > 1500) {
        this.points5s = Math.floor(1511.26 / (1 + 1639.28 * Math.pow(2.71828, -0.00412 * valueNumber)));
        this.points2s = Math.floor((this.points5s / 100) * 76);
        this.points3s = Math.floor((this.points5s / 100) * 88);
      }
      else {
        this.points2s = basePoints3s;
        this.points3s = basePoints2s;
        this.points5s = basePoints5s;
      }
    }
  }
}
