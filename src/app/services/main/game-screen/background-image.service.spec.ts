import { TestBed } from '@angular/core/testing';

import { BackgroundImageService } from './background-image.service';

describe('BackgroundImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackgroundImageService = TestBed.get(BackgroundImageService);
    expect(service).toBeTruthy();
  });
});
