import { Component } from '@angular/core';

@Component({
  selector: 'xyz-custom-directives',
  styleUrls: ['./custom-directives.component.css'],
  template: `
    <p emphasize>Hover to emphasize p tag</p>
    <div emphasize>Hover to emphasize div tag</div>
  `
})
export class CustomDirectivesComponent {}
