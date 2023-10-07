import { Component } from "@angular/core";
import { Species } from '../../chapter-3-writing-good-tests/model';

export interface Dino {
  position: number;
  name: string;
  // age in months
  age: number;
  species: Species;
  trained: boolean;
}

@Component({
  selector: 'app-dinosaur-list',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.scss']
})
export class DinosaurListComponent {
  displayedColumns: string[] = ['position', 'name', 'species', 'age', 'trained'];
  dataSource: Dino[] = [
    { position: 1, name: 'Blue', age: 10, species: Species.VELOCIRAPTOR, trained: true },
    { position: 2, name: 'Stego', age: 34, species: Species.STEGOSAURUS, trained: false }
  ];
}

