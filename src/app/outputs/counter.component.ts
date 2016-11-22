import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'xyz-counter',
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() result: EventEmitter<{}> = new EventEmitter();
  
  increment() {
    this.count++;
    this.result.emit(this.count);
  }
}