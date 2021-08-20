import { Constants } from "./Constants"

export class Bullet extends Phaser.GameObjects.Image {
    body: Phaser.Physics.Arcade.Body
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number) {
        super(scene, x, y, texture, frame)

        this.scene.physics.add.existing(this)
        this.body.setCollideWorldBounds()
        this.body.onWorldBounds = true
        this.body.world.on('worldbounds', (body: any) => {
            if (body.gameObject === this) {
                this.disappear()                
            }
        }, this)
    }

    shoot(pointer: any) {
        this.setRotation(Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y))
        this.scene.physics.moveToObject(this, pointer, Constants.Boy.bulletSpeed)
        //this.body.setVelocityX(Constants.Boy.bulletSpeed)
    }

    shootStraight(direction: string) {
        switch (direction) {
            case 'left':
                //this.setRotation(Phaser.Math.PI2/2)
                this.setFlipX(true)
                this.body.setVelocityX(-Constants.Boy.bulletSpeed)
                break
            default:
                //this.setRotation(0)
                this.setFlipX(false)
                this.body.setVelocityX(Constants.Boy.bulletSpeed)
                break
        }
    }

    reset() {
        this.setActive(true)
            .setVisible(true)
    }

    disappear() {
        //console.log('disappear')
        this.setActive(false)
            .setVisible(false)
    }

}