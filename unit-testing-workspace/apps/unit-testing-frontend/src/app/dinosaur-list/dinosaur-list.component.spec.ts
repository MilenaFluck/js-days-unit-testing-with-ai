/** Beispiele Asynchrones Testen **/
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Species } from '../chapter-3-writing-good-tests/model';
import { DinosaurListComponent } from './dinosaur-list.component';
import { of } from 'rxjs';
import { DinoHttpService } from './service/dino-http.service';

describe('DinosaurListComponent', () => {

  let spectator: Spectator<DinosaurListComponent>;

  const createComponent = createComponentFactory({
    component: DinosaurListComponent,
    mocks: [DinoHttpService],
    imports: [MatCardModule, MatTableModule, MatIconModule]
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return dino observable done callback', (done) => {
    // Arrange
    const id = 1;
    const dino = {id: id, name: 'Blue', age: 10, species: Species.VELOCIRAPTOR, trained: true};
    spectator.inject(DinoHttpService).getDino.mockReturnValue(of(dino));

    // Act
    spectator.component.getDino(id).subscribe(result => {
      // Assert
      expect(result).toStrictEqual(dino);
      done();
    });
  });
});
