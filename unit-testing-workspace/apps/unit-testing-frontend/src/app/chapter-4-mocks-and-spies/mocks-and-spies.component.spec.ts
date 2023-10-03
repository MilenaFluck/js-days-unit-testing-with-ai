import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MocksAndSpiesComponent } from './mocks-and-spies.components';
import { MocksAndSpiesHttpService } from './mocks-and-spies-http.service';
import { of, throwError } from 'rxjs';
import { error } from '@angular/compiler-cli/src/transformers/util';

describe('MocksAndSpiesComponent', () => {

  let spectator: Spectator<MocksAndSpiesComponent>;

  const createComponent = createComponentFactory({
    component: MocksAndSpiesComponent,
    mocks: [MocksAndSpiesHttpService]
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  afterEach(() => {
    /*** hier können alle Mocks gecleared werden ***/
    // jest.clearAllMocks();
  });

  /*** Beispiel 1: Einfacher Spy ***/
  it('should emit on chose', () => {
    spyOn(spectator.component.choosePark, 'emit');

    spectator.component.choose('');
    expect(spectator.component.choosePark.emit).toHaveBeenCalled();
  });

  /*** Beispiel 2: Service mocken und realistischen Return-Value liefern ***/
  /*** Wir benötigen einen Return-Value um weitere Funktionalität zu testen! ***/
  it('should return observable of parks', (done) => {

    /*** hier wird der Service gemockt ***/
    spectator.inject(MocksAndSpiesHttpService).get
      .mockReturnValue(of(['Phantasialand', 'Jurassic Park']));

    spectator.component.parks().subscribe(parks => {
      expect(parks).toStrictEqual(['Jurassic Park', 'Phantasialand']);
      done();
    });
  });
});
