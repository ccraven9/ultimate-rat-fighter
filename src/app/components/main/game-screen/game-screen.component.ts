import { Component, OnInit } from '@angular/core';
import { BackgroundImageService } from 'src/app/services/main/game-screen/background-image.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit{


  backGroundURL;
  backgroundSubscription: Subscription;
  loadImage = false;

  constructor(private bgImageService: BackgroundImageService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.backgroundSubscription = this.bgImageService.getData().subscribe(response => {
      let backGroundData = response;
      if(backGroundData){
        this.loadImage = true;
        this.backGroundURL = (this._sanitizer.bypassSecurityTrustStyle('url(' + backGroundData + ')'));
      }
    });
    // this.bgImageService.setBackgroundForest();
  }
}
