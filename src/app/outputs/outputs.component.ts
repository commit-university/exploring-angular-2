import {Component} from '@angular/core';

@Component({
  selector: 'xyz-outputs',
  template: `
    <div>
      Parent Num: {{ num }}<br />
      Parent Count: {{ parentCount }}
	    <xyz-counter [count]="num" (result)="onChange($event)"></xyz-counter>
	  </div>
  `
})
export class OutputsComponent {
  num: number;
  parentCount: number;
  
  constructor() {
    this.num = 0;
    this.parentCount = 0;
  }
  
  onChange(val: any) {
    this.parentCount = val;
  }
}