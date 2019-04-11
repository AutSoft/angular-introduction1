import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  @Input() message = 'this is my message';
  @Input() config: { color: string, isUpperCase: boolean };
  clickCounter = 0;
  imageSrc = 'https://angular.io/assets/images/logos/angular/angular.png';

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
    this.clickCounter++;
  }

}
