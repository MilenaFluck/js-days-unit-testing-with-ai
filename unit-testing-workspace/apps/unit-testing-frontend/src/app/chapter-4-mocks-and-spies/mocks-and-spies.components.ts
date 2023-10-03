import { Component, EventEmitter, Output } from '@angular/core';
import { MocksAndSpiesHttpService } from './mocks-and-spies-http.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'mocks-and-spies',
  template: ``,
})
export class MocksAndSpiesComponent {

  @Output() choosePark = new EventEmitter<string>();

  constructor(private readonly mocksAndSpiesHttpService: MocksAndSpiesHttpService) {}

  choose(park: string | undefined): void {
    if (!park) return;
    this.choosePark.emit(park);
  }

  parks(): Observable<string[]> {
    return this.mocksAndSpiesHttpService.get().pipe(
      tap(parks => console.log(parks)),
      map(parks => parks.sort())
    )
  }

}
