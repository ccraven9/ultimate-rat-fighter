import { Component, OnInit } from '@angular/core';
import { EnemyImageService } from 'src/app/services/main/game-screen/enemy-image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css']
})
export class EnemyComponent implements OnInit {

  enemyImage;
  enemyImageSubscription: Subscription;

  constructor(private enemyImageService: EnemyImageService) { }

  ngOnInit() {
    this.enemyImageSubscription = this.enemyImageService.getData().subscribe(response => {
      let playerData = response;
      if (playerData) {
        this.enemyImage = playerData;
        console.log(this.enemyImage);
      }
    });
  }

}
