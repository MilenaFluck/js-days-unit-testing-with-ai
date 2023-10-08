import { Component } from "@angular/core";
import { Species } from '../chapter-3-writing-good-tests/model';
import { Dino } from './model/dino-view.model';
import { DinoUtil } from './model/dino.util';

@Component({
  selector: 'app-dinosaur-list',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.scss']
})
export class DinosaurListComponent {
  displayedColumns: string[] = ['position', 'name', 'species', 'herbivore', 'age', 'trained'];
  dataSource: Dino[] = [
    { position: 1, name: 'Blue', age: 10, species: Species.VELOCIRAPTOR, trained: true },
    { position: 2, name: 'Stego', age: 34, species: Species.STEGOSAURUS, trained: false },
    { position: 3, name: 'T.R.', age: 40, species: Species.T_REX, trained: false }
  ];

  isHerbivore(element: Dino) {
    return DinoUtil.isHerbivore(element.species);
  }
}

