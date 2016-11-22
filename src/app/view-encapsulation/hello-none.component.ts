import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'xyz-hello-none',
  encapsulation: ViewEncapsulation.None,
	template: `
  <p class="hello other-hello">
    <code>None -> .other-hello:</code> Hello World
  </p>
  `,
	styles: [`
    .other-hello {
      color: white;
      background-color: gray;
      padding: 5px;
    }	  
	`]
})
export class HelloNone {
  name: string;
 
  constructor() {
    this.name = 'World';
  }
}