import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { HelloComponent } from './hello/hello.component';
import { Hello } from './hello/hello.base.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { HelloEmulated } from './view-encapsulation/hello-emulated.component';
import { HelloNative } from './view-encapsulation/hello-native.component';
import { HelloNone } from './view-encapsulation/hello-none.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightPDirective } from './custom-directives/highlight-p.directive';
import { HighlightDivDirective } from './custom-directives/highlight-div.directive';
import { OutputsComponent } from './outputs/outputs.component';
import { CounterComponent } from './outputs/counter.component';
import { HttpExampleComponent } from './http-example/http-example.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'async-pipes', component: AsyncPipeComponent },
  { path: 'inputs', component: HelloComponent },
  { path: 'outputs', component: OutputsComponent },
  { path: 'encapsulation', component: ViewEncapsulationComponent },
  { path: 'directives', component: CustomDirectivesComponent },
  { path: 'http', component: HttpExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsyncPipeComponent,
    HelloComponent, Hello,
    ViewEncapsulationComponent, HelloEmulated, HelloNative, HelloNone, 
    CustomDirectivesComponent, HighlightPDirective, HighlightDivDirective, 
    OutputsComponent, CounterComponent,
    HttpExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
