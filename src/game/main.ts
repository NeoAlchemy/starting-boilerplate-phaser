import { Boot } from './scenes/Boot';
import { GameOver } from './scenes/GameOver';
import { Game as MainGame } from './scenes/Game';
import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
//  1920x1080
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 320,
    height: 480,
    parent: 'game-container',
    backgroundColor: '0x000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
        },
    },
    scene: [
        Boot,
        Preloader,
        MainGame,
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
