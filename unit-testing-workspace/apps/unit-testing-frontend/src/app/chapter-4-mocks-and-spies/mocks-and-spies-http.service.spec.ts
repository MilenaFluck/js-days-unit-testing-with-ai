import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { MocksAndSpiesHttpService } from './mocks-and-spies-http.service';
import { environment } from '../../environment/environment';

describe('MocksAndSpiesHttpService', () => {

  let spectator: SpectatorHttp<MocksAndSpiesHttpService>;

  const createService = createHttpFactory({
    service: MocksAndSpiesHttpService,
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should get parks', (done) => {
    const parks = ['Jurassic Park', 'Phantasialand'];
    spectator.service.get()
      .subscribe((value) => {
        expect(value).toEqual(parks);
        done();
      });
    const req = spectator.expectOne(
      `${environment.baseUrl}/parks`,
      HttpMethod.GET
    );
    req.flush(parks);
  });
});
