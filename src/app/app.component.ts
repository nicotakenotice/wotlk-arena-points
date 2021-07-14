import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

const defaultPoints: any = {
  '2s': 261,
  '3s': 303,
  '5s': 344
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentYear: number = new Date().getFullYear();
  rating: FormControl = new FormControl();
  points: any = defaultPoints;
  showError: boolean = false;
  private subs: Subscription[] = [];
  
  ngOnInit(): void {
    this.subs.push(
      this.rating.valueChanges.subscribe(value => {
        const numericValue: number = Number(value);
        if (Number.isNaN(numericValue)) this.showError = true;
        else this.update(numericValue);
      })
    );
    this.focusInput();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  focusInput(): void {
    document.getElementById('rating')?.getElementsByTagName('input')[0].focus();
  }

  reset(): void {
    this.rating.setValue('');
    this.points = defaultPoints;
    this.focusInput();
  }

  update(value: number): void {
    this.showError = false;
    if (value > 1500) {
      const cap: number = Math.floor(1511.26 / (1 + 1639.28 * Math.pow(2.71828, -0.00412 * value)));
      this.points = {
        '2s': Math.floor((cap / 100) * 76),
        '3s': Math.floor((cap / 100) * 88),
        '5s': cap
      };
    }
    else this.points = defaultPoints;
  }
}
