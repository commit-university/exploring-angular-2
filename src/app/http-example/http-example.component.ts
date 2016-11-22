import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector: 'xyz-http-example',
	template: `
	  <b>Angular 2 HTTP requests using RxJs Observables!</b>
	  <ul>
	    <li *ngFor="let doctor of doctors">{{doctor.name}}</li>
	  </ul>	  
	`
})
export class HttpExampleComponent {
  private doctors = [];
  
  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          console.log(data);
          this.doctors.push(data);
        });
  }
}