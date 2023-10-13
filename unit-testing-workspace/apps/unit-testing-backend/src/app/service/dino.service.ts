import { Injectable } from '@nestjs/common';
import { UnknownIdError } from '../errors/unknown-id-error';
import { Dino } from '../model/dino.model';

@Injectable()
export class DinoService {

  getDinoData(id: string): Dino {
    let dino: Dino;
    switch (id) {
      case ('1'):
        dino = new Dino('1', 'Blue', 10, 'Velociraptor', true);
        break;
      case ('2'):
        dino = new Dino('2', 'Stego', 34, 'Stegosaurus', false);
        break;
      case ('3'):
        dino = new Dino('3', 'T.R.', 40, 'T_Rex', false);
        break;
      default:
        throw new UnknownIdError('Dino mit der ID ' + id + ' konnte nicht gefunden werden');
    }
    return dino;
  }
}
