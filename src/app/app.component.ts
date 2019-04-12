import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Keep clicking';
  config = { color: 'red', isUpperCase: false };
  isComponentVisible = true;

  recreateButtonClicked() {
    this.isComponentVisible = true;
  }

  buttonClicked(clickCounter: number) {
    if (clickCounter > 15) {
      this.isComponentVisible = false;
    } else if (clickCounter > 10) {
      this.message = 'Nice job';
      this.config = { color: 'green', isUpperCase: true };
    }
  }
}
