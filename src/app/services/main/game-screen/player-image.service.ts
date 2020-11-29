import { Injectable } from '@angular/core';
import { ASSET_PLAYER } from 'src/app/constants/asset.constants';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerImageService {

  currentPlayerImage = ASSET_PLAYER.DEFAULT;
  playerImageSubject = new BehaviorSubject<string>(this.currentPlayerImage);

  constructor() { }

  getData(): Observable<string> {
    return this.playerImageSubject.asObservable();
  }

  setPlayerImage(image){
    this.currentPlayerImage = image;
    this.playerImageSubject.next(this.currentPlayerImage);
  }
}
