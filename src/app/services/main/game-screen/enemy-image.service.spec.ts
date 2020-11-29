import { TestBed } from '@angular/core/testing';

import { EnemyImageService } from './enemy-image.service';

describe('EnemyImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnemyImageService = TestBed.get(EnemyImageService);
    expect(service).toBeTruthy();
  });
});
