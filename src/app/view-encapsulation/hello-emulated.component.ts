import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'xyz-hello-emulated',
  encapsulation: ViewEncapsulation.Emulated,
	template: `
    <p class="hello">
      <code>Emulated --> .hello:</code> Hello World
    </p>
  `,
	styles: [`
    .hello { color: green; }	  
	`]
})
export class HelloEmulated {
  name: string;
 
  constructor() {
    this.name = 'World';
  }
}