import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'example-assertions',
  template: ``,
})
export class ExampleAssertionsComponent {

  @Output() choosePark = new EventEmitter<string>();

  choose(park: string | undefined): void {
    if (!park) return;
    this.choosePark.emit(park);
  }

}
