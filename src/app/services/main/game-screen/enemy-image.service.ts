import { Injectable } from '@angular/core';
import { ASSET_ENEMY } from 'src/app/constants/asset.constants';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnemyImageService {

  currentEnemyImage = ASSET_ENEMY.REAL_RAT;
  enemyImageSubject = new BehaviorSubject<string>(this.currentEnemyImage);

  constructor() { }

  getData(): Observable<string> {
    return this.enemyImageSubject.asObservable();
  }

  setEnemyImage(image){
    this.currentEnemyImage = image;
    this.enemyImageSubject.next(this.currentEnemyImage);
  }
}
