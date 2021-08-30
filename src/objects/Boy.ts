import { Constants } from "./Constants"
import { State } from "./State"
import { Bullet } from "./Bullet"
import { gameEvents } from "../event_handler/EventEmitter"
import SpineObjectContainer from "./SpineObjectContainer"
export class Boy extends SpineObjectContainer {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys
    state: State
    bullets: Phaser.GameObjects.Group
    lastShotTime: number
    shootStraightKey: Phaser.Input.Keyboard.Key
    health: number
    constructor(scene: Phaser.Scene, x: number, y: number, key: string, animationName: string, loop: boolean) {
        super(scene, x, y, key, animationName, loop)

        this.state = State.Run

        this.health = Constants.Boy.initialHealth
        this.scene.registry.set('health', this.health)

        this.spine
            .setDepth(Constants.Boy.depth)

        this.setScale(Constants.Boy.scale)

        //physics
        this.initPhysics()

        //Control
        this.initControl()

        //Bullet group
        this.initBullet()

        this.spine.play('idle', true, true)
    }

    initBullet() {
        this.lastShotTime = this.scene.time.now

        this.bullets = this.scene.physics.add.group({
            classType: Bullet
        })        
    }

    initControl() {
        this.cursors = this.scene.input.keyboard.createCursorKeys()
        this.shootStraightKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        )
    }
    initPhysics() {
        //@ts-ignore
        this.body.setGravityY(Constants.Boy.gravityY).setCollideWorldBounds()
    }

    jumpUp() {        
        //@ts-ignore
        this.body.setVelocityY(-Constants.Boy.jumpSpeed)

        this.spine.play('jump', true, true)
    }

    goLeft(delta: number) {
        //@ts-ignore
        this.body.setVelocityX(-Constants.Boy.runSpeed)

        //@ts-ignore
        if (this.body.onFloor()) {

            this.spine.play('run', true, true)
        }
        this.setFlipX(true)
    }


    goRight(delta: number) {
        //@ts-ignore
        this.body.setVelocityX(Constants.Boy.runSpeed)
        
        //@ts-ignore
        if (this.body.onFloor()) {

            this.spine.play('run', true, true)
        }
        this.setFlipX(false)
    }    

    shoot(time: number) {
        if (time - this.lastShotTime >= 1000 / Constants.Boy.rateOfFire) {
            this.lastShotTime = time
            var bullet = this.bullets.get(this.body.x + this.body.width * Constants.Boy.gunOffset.x, this.body.y + this.body.width * Constants.Boy.gunOffset.y, 'texture', 'syringe.png')
            if (bullet) {
                bullet.reset()
                if (this.body.x <= this.scene.input.activePointer.worldX) {
                    this.setFlipX(false)
                }
                else {
                    this.setFlipX(true)
                }
                bullet.shoot({
                    x: this.scene.input.activePointer.worldX,
                    y: this.scene.input.activePointer.worldY
                })
            }
        }
    }

    infected() {
        if (this.health > 0) {            
            this.health -= 1
            this.scene.registry.set('health', this.health)
            gameEvents.emit('health_changed')
        }
        else {            
            this.state = State.Dead
            this.spine.play('death', false, true)
        }
    }

    shootStraight(time: number) {
        if (time - this.lastShotTime >= 1000 / Constants.Boy.rateOfFire) {
            this.lastShotTime = time
            var bullet = this.bullets.get(this.body.x + this.body.width * Constants.Boy.gunOffset.x, this.body.y + this.body.width * Constants.Boy.gunOffset.y, 'texture', 'syringe.png')
            if (bullet) {
                bullet.reset()
                switch (this.spine.scaleX==-1) {
                    case true:
                        bullet.shootStraight('left')
                        break
                    default:
                        bullet.shootStraight('right')
                        break
                }
            }
        }
    }

    update(time: number, delta: number) {
        switch (this.state) {
            case State.Run:
                //@ts-ignore
                if (this.body.onFloor() && !this.cursors.left.isDown && !this.cursors.right.isDown) {

                    this.spine.play('idle', true, true)
                }
                //@ts-ignore
                if (!this.body.onFloor()) {
                    
                    this.spine.play('jump', true, true)
                }
                //@ts-ignore
                if (this.cursors.up.isDown && this.body.onFloor()) {
                    this.jumpUp()
                }
                
                if (this.cursors.left.isDown) {
                    this.goLeft(delta)
                }
                else if (this.cursors.right.isDown) {
                    this.goRight(delta)
                }
                else {
                    //@ts-ignore
                    this.body.setVelocityX(0)
                }
                if (this.scene.input.activePointer.isDown) {
                    this.shoot(time)
                }
                else if (this.shootStraightKey.isDown) {
                    this.shootStraight(time)
                }
                break
            case State.Dead:
                //@ts-ignore
                this.body.setVelocityX(0)
            default:
                break
        }

    }
}