import { ExampleAssertionsComponent } from './example-assertions.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

describe('ExampleAssertionsComponent', () => {

  let spectator: Spectator<ExampleAssertionsComponent>;

  const createComponent = createComponentFactory({
    component: ExampleAssertionsComponent
  });

  function createEventEmitterMock(): any {
    return {
      emit: jest.fn()
    }
  }

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });


  /*** Regel 4: Halte die Anzahl an Assertions gering. ***/
  it('should not emit chosen park Phantasialand', () => {
    spectator.component.choosePark = createEventEmitterMock();
    spectator.component.choose('Jurassic Park');

    /*** Welche Assertion würdest du wählen? ***/
    expect(spectator.component.choosePark.emit).toHaveBeenCalled();
    expect(spectator.component.choosePark.emit).not.toHaveBeenCalledWith('Phantasialand');
    expect(spectator.component.choosePark.emit).toHaveBeenCalledTimes(1);
    expect(spectator.component.choosePark.emit).lastCalledWith('Jurassic Park');
  });


  /*** Regel 2: Teste immer nur eine Sache pro Tests.. ***/
  it('should emit chosen park if park exists', () => {
    spectator.component.choosePark = createEventEmitterMock();

    /*** Test 1 ***/
    spectator.component.choose(undefined);
    expect(spectator.component.choosePark.emit).not.toHaveBeenCalled();

    /*** Test 2 ***/
    spectator.component.choose('Jurassic Park');
    expect(spectator.component.choosePark.emit).nthCalledWith(1, 'Jurassic Park');
  });
});
