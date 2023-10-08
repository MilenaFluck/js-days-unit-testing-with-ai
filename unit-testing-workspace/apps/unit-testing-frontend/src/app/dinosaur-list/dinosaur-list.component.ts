import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Species } from '../chapter-3-writing-good-tests/model';
import { Dino } from './model/dino-view.model';
import { DinoUtil } from './model/dino.util';
import { DinoHttpService } from './service/dino-http.service';

@Component({
  selector: 'app-dinosaur-list',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.scss']
})
export class DinosaurListComponent {
  displayedColumns: string[] = ['id', 'name', 'species', 'herbivore', 'age', 'trained'];
  dataSource: Dino[] = [
    { id: 1, name: 'Blue', age: 10, species: Species.VELOCIRAPTOR, trained: true },
    { id: 2, name: 'Stego', age: 34, species: Species.STEGOSAURUS, trained: false },
    { id: 3, name: 'T.R.', age: 40, species: Species.T_REX, trained: false }
  ];

  constructor(private readonly dinoHttpService: DinoHttpService) {
  }

  isHerbivore(element: Dino) {
    return DinoUtil.isHerbivore(element.species);
  }

  getDino(id: number): Observable<Dino> {
    return this.dinoHttpService.getDino(id);
  }
}

