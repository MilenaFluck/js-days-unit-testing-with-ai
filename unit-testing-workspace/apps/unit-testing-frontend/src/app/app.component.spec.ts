import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });
});
