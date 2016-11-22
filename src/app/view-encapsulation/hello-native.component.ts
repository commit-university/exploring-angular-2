import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'xyz-hello-native',
  encapsulation: ViewEncapsulation.Native,
	template: `
    <p class="hello other-hello">
      <code>Native --> .hello:</code> Hello World
    </p>
  `,
	styles: [`
    .hello { font-weight: bold; }
  `]
})
export class HelloNative {
  name: string;

  constructor() {
    this.name = 'World';
  }
}