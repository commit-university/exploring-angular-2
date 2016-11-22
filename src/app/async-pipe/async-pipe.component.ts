import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'xyz-async-pipe',
  styleUrls: ['./async-pipe.component.css'],
  template: `
    <p>Total price is {{ fetchPrice | async | currency }}</p>
    <p>Seconds: {{ seconds | async }} </p>
  `,
})
export class AsyncPipeComponent {
count: number = 0;

  fetchPrice: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 500);
  });
  
  seconds: any = new Observable(observer => {
    setInterval(() => { observer.next(this.count++); }, 1000);
  });
}