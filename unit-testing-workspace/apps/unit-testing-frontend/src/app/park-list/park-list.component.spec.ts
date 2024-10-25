/** Beispiel DOM Testing **/
import * as fs from 'fs';
import path = require('path');
import { ParkListComponent } from './park-list.component';
import { ParkService } from './service/park.service';

describe('ParkListComponent', () => {

  let parkListComponent: ParkListComponent;

  beforeEach(() => {
    parkListComponent = new ParkListComponent(new ParkService());
  });

  beforeEach(() => {
    const filePath = path.join(process.cwd(), 'apps\\unit-testing-frontend\\src\\app\\park-list', 'park-list.component.html');
    document.body.innerHTML = fs.readFileSync(filePath, {encoding: 'utf8'});
  });

  it('should add paragraph to id="outburst" element', () => {
    parkListComponent.outburst();

    const outburstElement = document.getElementById('outburst');
    const paragraph = outburstElement?.firstElementChild;
    expect(paragraph?.textContent).toContain('ist ausgebrochen. Unverzüglich Massnahmen einleiten');
  });
});
