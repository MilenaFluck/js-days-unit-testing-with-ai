import { AfterViewInit, Component } from '@angular/core';
declare const Reveal: any;

@Component({
  selector: 'unit-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    Reveal.initialize({
      controls: true,
      progress: true,
      slideNumber: true,
      hash: true,
      transition: 'slide',
      dependencies: [
        {src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true}
      ]
    });
  }
}
