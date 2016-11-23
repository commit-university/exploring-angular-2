import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector: 'xyz-http-example',
	template: `
	  <h2>Angular 2 HTTP requests using RxJs Observables!</h2>
    <br /><button (click)="loadData()">Load data</button><br />
	  <ul>
	    <li *ngFor="let doctor of doctors">{{doctor.name}}</li>
	  </ul>	  
	`
})
export class HttpExampleComponent {
  private doctors = [];
  
  constructor(private http: Http) {}

  loadData() {
    this.http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          console.log(data);
          this.doctors.push(data);
        });
  }
}