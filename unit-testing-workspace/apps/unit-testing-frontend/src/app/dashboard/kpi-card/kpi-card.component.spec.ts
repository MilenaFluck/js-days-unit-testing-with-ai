import { MatCardModule } from '@angular/material/card';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { KpiCardComponent } from './kpi-card.component';

describe('KpiCardComponent', () => {
  let kpiCardComponent: Spectator<KpiCardComponent>;

  const createComponent = createComponentFactory({
    component: KpiCardComponent,
    imports: [MatCardModule],
  });

  beforeEach(() => {
    kpiCardComponent = createComponent();
    kpiCardComponent.detectChanges();
  });

  it('should render kpi card without difference', () => {
    kpiCardComponent.component.title = 'Besucher';
    kpiCardComponent.component.value = 10000000;
    kpiCardComponent.detectChanges();

    expect(kpiCardComponent.element).toMatchSnapshot();
  });

  it('should render kpi card with difference', () => {
    kpiCardComponent.component.title = 'Besucher';
    kpiCardComponent.component.value = 10000000;
    kpiCardComponent.component.difference = '10%';
    kpiCardComponent.detectChanges();

    expect(kpiCardComponent.element).toMatchSnapshot();
  });

  it('should render kpi card with difference inline', () => {
    kpiCardComponent.component.title = 'Besucher';
    kpiCardComponent.component.value = 10000000;
    kpiCardComponent.component.difference = '10%';
    kpiCardComponent.detectChanges();

    expect(kpiCardComponent.element).toMatchInlineSnapshot();
  });
});
