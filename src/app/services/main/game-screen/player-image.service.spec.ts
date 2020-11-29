import { TestBed } from '@angular/core/testing';

import { PlayerImageService } from './player-image.service';

describe('PlayerImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerImageService = TestBed.get(PlayerImageService);
    expect(service).toBeTruthy();
  });
});
