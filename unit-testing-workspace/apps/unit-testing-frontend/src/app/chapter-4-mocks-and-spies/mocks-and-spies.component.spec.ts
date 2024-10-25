import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MocksAndSpiesComponent } from './mocks-and-spies.components';
import { MocksAndSpiesHttpService } from './mocks-and-spies-http.service';
import { of } from 'rxjs';

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
    /*** here all mocks can be cleared ***/
    // jest.clearAllMocks();
  });

  /*** Example 1: Simple Spy ***/
  it('should emit on chose', () => {
    spyOn(spectator.component.choosePark, 'emit');

    spectator.component.choose('');
    expect(spectator.component.choosePark.emit).toHaveBeenCalled();
  });

  /*** Example 2: Mock service and deliver realistic Return-Value ***/
  /*** We need a Return-Value to test further functionality! ***/
  it('should return observable of parks', (done) => {

    /*** here the service is mocked ***/
    spectator.inject(MocksAndSpiesHttpService).get
      .mockReturnValue(of(['Phantasialand', 'Jurassic Park']));

    spectator.component.parks().subscribe(parks => {
      expect(parks).toStrictEqual(['Jurassic Park', 'Phantasialand']);
      done();
    });
  });
});
