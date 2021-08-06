export class SpineObject {
    scene: Phaser.Scene
    spine: SpineGameObject
    body: Phaser.Physics.Arcade.Body// | Phaser.Physics.Arcade.StaticBody | MatterJS.BodyType
    private scale: number
    constructor(scene: Phaser.Scene, x: number, y: number, key?: string, animationName?: string, loop?: boolean) {
        this.scene = scene
        this.spine = scene.add.spine(x, y, key, animationName, loop)

        this.scale = 1

        //@ts-ignore
        this.scene.physics.add.existing(this.spine)//combine
        this.body = this.spine.body as Phaser.Physics.Arcade.Body

        // future project decoupling spine and body
        //@ts-ignore
        //this.scene.add.existing(this.spine)
        //this.scene.physics.world.enable(this.boy)
    }

    setFlipX(flip: boolean) {
        if (flip) {
            this.body.setOffset(this.spine.width, 0)
            this.spine.setScale(-this.scale, this.scale)
        } else if (!flip) {
            this.body.setOffset(0, 0)
            this.spine.setScale(this.scale)
        }
    }

    setScale(scale:number){
        this.scale=scale
        this.spine.setScale(scale)
    }
}