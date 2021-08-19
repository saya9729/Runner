import { PreloadScene } from './scenes/PreloadScene'
import { GamePlayScene } from './scenes/GamePlayScene'
import { GameUIScene } from './scenes/GameUIScene'
import 'phaser/plugins/spine/dist/SpinePlugin'
export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Runner',
  width: 1920,
  height: 1080,
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
  //transparent: true,
  // scale:{
  //   zoom: 0.5
  // },
  plugins: {
    scene: [
      {
        key: 'SpinePlugin',
        plugin: window.SpinePlugin,
        mapping: 'spine'
      }
    ]
  },
  backgroundColor: 0x4ab2ed
};
