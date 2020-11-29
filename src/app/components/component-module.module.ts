import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main/header/header.component';
import { GameScreenComponent } from './main/game-screen/game-screen.component';
import { PlayerDetailsComponent } from './game-elements/player-details/player-details.component';
import { PlayerComponent } from './game-elements/player/player.component';
import { EnemyComponent } from './game-elements/enemy/enemy.component';
import { EnemyDetailsComponent } from './game-elements/enemy-details/enemy-details.component';
import { ActionMenuComponent } from './game-elements/action-menu/action-menu.component';

const COMPONENTS = [
  HeaderComponent,
  GameScreenComponent,
  PlayerDetailsComponent,
  PlayerComponent,
  EnemyComponent,
  EnemyDetailsComponent,
  ActionMenuComponent
]

const MODULES = [
  CommonModule
]

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports: COMPONENTS
  
})
export class ComponentModule { }
