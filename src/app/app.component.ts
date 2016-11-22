import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Angular 2 Commit University</h1>
  <nav>
    <a routerLink="/" routerLinkActive="active">HOME</a>
    <a routerLink="/inputs" routerLinkActive="active">Component inputs</a>
    <a routerLink="/outputs" routerLinkActive="active">Component events</a>
    <a routerLink="/async-pipes" routerLinkActive="active">Async Pipes</a>
    <a routerLink="/encapsulation" routerLinkActive="active">View encapsulation</a>
    <a routerLink="/directives" routerLinkActive="active">Custom directives</a>
    <a routerLink="/http" routerLinkActive="active">Http example</a>
  </nav> 

  <!-- Router insertion point -->
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app works!';
}
