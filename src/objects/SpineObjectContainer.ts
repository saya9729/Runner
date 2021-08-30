declare global {
    interface ISpineObjectContainer extends Phaser.GameObjects.Container {
        readonly spine: SpineGameObject
        //faceDirection(dir: 1 | -1): void
        setPhysicsSize(width: number, height: number): void
        setFlipX(flip: boolean):void
    }
}

export default class SpineObjectContainer extends Phaser.GameObjects.Container implements ISpineObjectContainer {
    spine: SpineGameObject
    body:Phaser.Physics.Arcade.Body
    constructor(scene: Phaser.Scene, x: number, y: number, key: string, animationName: string, loop: boolean = false) {
        super(scene, x, y)

        this.spine = scene.add.spine(0, 0, key, animationName, loop)

        //Add to scene
        scene.add.existing(this)
        scene.physics.add.existing(this)

        const bounds = this.spine.getBounds()
        const width = bounds.size.x
        const height = bounds.size.y
        this.setPhysicsSize(width, height)

        this.add(this.spine)
    }

    // faceDirection(dir: 1 | -1) {
    //     if (this.spine.scaleX === dir) {
    //         return
    //     }

    //     this.spine.scaleX = dir
    // }

    setFlipX(flip: boolean) {
        if (flip) {
            this.spine.scaleX = -1
        } else if (!flip) {
            this.spine.scaleX = 1
        }
    }

    setPhysicsSize(width: number, height: number) {        
        this.body.setOffset(width * -0.5, -height)// Spine origin at (0.5, 1), bring back to (0, 0)
        this.body.setSize(width, height)        
    }
}
Phaser.GameObjects.GameObjectFactory.register('spineContainer', function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, key: string, anim: string, loop = false) {
    const container = new SpineObjectContainer(this.scene, x, y, key, anim, loop)

    this.displayList.add(container)

    return container
})