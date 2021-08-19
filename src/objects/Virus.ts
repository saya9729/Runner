import { Constants } from "./Constants"

export class Virus extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number) {
        super(scene, x, y, texture, frame)
        this.setOrigin(1,1)

        this.initAnimation()


    }

    initAnimation() {
        this.scene.tweens.add({
            targets: this,
            y:this.y+Constants.Virus.floatingDistance,
            yoyo:true,
            duration:Constants.Virus.floatingDuration,
            repeat:-1
        })
    }

    disappear(){
        this.destroy()
    }
}