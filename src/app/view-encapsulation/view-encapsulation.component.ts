import { Component } from '@angular/core';

@Component({
  selector: 'xyz-view-encapsulation',
  template: `
	  <div class="hello">Hello World</div>
	  <xyz-hello-emulated></xyz-hello-emulated>
    <xyz-hello-native></xyz-hello-native>
    <xyz-hello-none></xyz-hello-none>
	`,
	// encapsulation: ViewEncapsulation.Emulated // default
	styles: [`
	  .hello {
      text-decoration: underline;
    }
	`]
})
export class ViewEncapsulationComponent {
  name: string;
  constructor() {
    this.name = 'World';
  }
}
