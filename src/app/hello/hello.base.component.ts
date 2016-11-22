import {Component, Input} from '@angular/core';

@Component({
  selector: 'xyz-base-hello',
  template: '<p>Hello, {{name}}</p>'
})
export class Hello {
  @Input() name: string;
}