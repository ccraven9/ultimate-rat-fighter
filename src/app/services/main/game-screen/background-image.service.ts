import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ASSET_BACKGROUNDS } from 'src/app/constants/asset.constants';

@Injectable({
  providedIn: 'root'
})


export class BackgroundImageService {

  currentBackground = ASSET_BACKGROUNDS.TOWN
  backgroundImageSubject = new BehaviorSubject<string>(this.currentBackground);

  constructor() {}

  getData(): Observable<string> {
    return this.backgroundImageSubject.asObservable();
  }

  getCurrentBackground(){
    return this.currentBackground;
  }

  setBackgroundForest() {
    this.currentBackground = ASSET_BACKGROUNDS.FOREST;
    this.backgroundImageSubject.next(this.currentBackground);
  }

  setBackgroundTown() {
    this.currentBackground = ASSET_BACKGROUNDS.TOWN;
    this.backgroundImageSubject.next(this.currentBackground);
  }

}
