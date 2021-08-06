import { PreloadScene } from './scenes/PreloadScene'
import { GamePlayScene } from './scenes/GamePlayScene'
import { GameUIScene } from './scenes/GameUIScene'
import 'phaser/plugins/spine/dist/SpinePlugin'
export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Mario',
  width: 3000,
  height: 3000,
  type: Phaser.AUTO,
  scene: [
    PreloadScene,
    GamePlayScene,
    GameUIScene
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug:true
    }
  },
  pixelArt: true,
  transparent: true,
  scale:{
    zoom: 0.5
  },
  plugins: {
    scene: [
      {
        key: 'SpinePlugin',
        plugin: window.SpinePlugin,
        mapping: 'spine'
      }
    ]
  }
};
