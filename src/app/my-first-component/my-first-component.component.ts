import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  public message = 'this is my message';
  public clickCounter = 0;
  imageSrc = 'https://angular.io/assets/images/logos/angular/angular.png';

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
    this.clickCounter++;
  }

}
