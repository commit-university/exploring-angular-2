import { Component } from '@angular/core';

@Component({
	selector: 'xyz-hello',
  styleUrls: ['./hello.component.css'],
	template: `<div>
	    <xyz-base-hello [name]="helloName"></xyz-base-hello>
	    <xyz-base-hello name="Other World"></xyz-base-hello>
	  </div>`
})
export class HelloComponent {
  helloName: string;
  
  constructor() {
    this.helloName = "World";
  }
}