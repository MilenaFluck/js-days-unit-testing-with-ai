import { Component } from "@angular/core";
import { Species } from '../chapter-3-writing-good-tests/model';
import { Park } from './model/park.model';
import { ParkService } from './service/park.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.scss']
})
export class ParkListComponent {
  displayedColumns: string[] = ['id', 'name', 'species', 'open'];
  dataSource: Park[] = [
    {id: 1, name: 'Jurassic Park', isOpen: false},
    {
      id: 2,
      name: 'Jurassic World',
      isOpen: true
    },
    {id: 3, name: 'Phantasisaland', isOpen: true}
  ];

  constructor(private parkService: ParkService) {
  }

  getSpecies(id: number): Species[] {
    return this.parkService.getSpeciesById(id);
  }

  outburst() {
    const outburstElement = document.getElementById('outburst');
    if (outburstElement) {
      const messageElement = document.createElement('p');
      messageElement.textContent = 'Der Dinosaurier mit der ID ' + Math.floor(Math.random() * 10) + ' ist ausgebrochen. Unverzüglich Massnahmen einleiten!';
      messageElement.style.color = '#C01C1C';
      outburstElement.innerHTML = '';
      outburstElement.append(messageElement);
    }
  }

  solve() {
    const outburstElement = document.getElementById('outburst');
    if (outburstElement) {
      outburstElement.innerHTML= '';
    }
  }
}

