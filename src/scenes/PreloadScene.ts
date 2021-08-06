export class PreloadScene extends Phaser.Scene{
    preload() {
        this.load
            .image('ground_tileset', 'assets/tileset/ground_tileset.png')
            .tilemapTiledJSON('E1M1', 'assets/map/E1M1.json')
            .atlas('texture','assets/texture/texture_bundle.png','assets/texture/texture_bundle.json')
            .spine('boy', 'assets/spine/spineboy-pro.json', 'assets/spine/spineboy-pro.atlas', true)
    }
    create(){
        this.scene.start('GamePlayScene')
    }
}