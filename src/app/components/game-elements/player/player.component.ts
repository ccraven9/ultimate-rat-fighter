import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerImageService } from 'src/app/services/main/game-screen/player-image.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerImage;
  playerImageSubscription: Subscription;

  constructor(private playerService: PlayerImageService) { }

  ngOnInit() {
    this.playerImageSubscription = this.playerService.getData().subscribe(response => {
      let playerData = response;
      if (playerData) {
        this.playerImage = playerData;
        console.log(this.playerImage)
      }
    });
  }

}
