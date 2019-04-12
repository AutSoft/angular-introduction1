import {
  AfterViewInit,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() message = 'this is my message';
  @Input() config: { color: string, isUpperCase: boolean };
  @Output() buttonClick = new EventEmitter<number>();
  @ViewChild('btn') button: ElementRef<HTMLButtonElement>;
  clickCounter = 0;
  imageSrc = 'https://angular.io/assets/images/logos/angular/angular.png';
  changeDetectionCounter = 0;

  constructor() {
    console.log('ctr');
  }

  ngOnInit() {
    console.log('on init');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  get log() {
    this.changeDetectionCounter++;
    console.log(this.changeDetectionCounter);
    return 'test';
  }

  incrementCounter() {
    this.clickCounter++;
    this.buttonClick.emit(this.clickCounter);
    this.button.nativeElement.textContent = `Don't click me`;
  }

}
