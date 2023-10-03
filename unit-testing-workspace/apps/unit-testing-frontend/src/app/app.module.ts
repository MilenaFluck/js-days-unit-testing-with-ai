import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MocksAndSpiesComponent } from './chapter-4-mocks-and-spies/mocks-and-spies.components';
import {
  ExampleAssertionsComponent
} from './chapter-2-writing-good-tests/example-assertions/example-assertions.component';

@NgModule({
  declarations: [
    AppComponent,
    MocksAndSpiesComponent,
    ExampleAssertionsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
