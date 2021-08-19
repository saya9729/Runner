import { gameEvents } from "../event_handler/EventHandler"
import { Boy } from "../objects/Boy"
import { Bullet } from "../objects/Bullet"
import { Constants } from "../objects/Constants"
import { Virus } from "../objects/Virus"
// const PROCESSING = {
//     '1-tree-cut2': saveFallingTree,
//     '1-tree3': updateTreeBody,
//     'c-mask': processMask,
//     'c-corona': processCorona,
//     'c-bush': bush => bush.setDepth(Constants.DEPTH.foregroundMain),
//     '3-closed': rotateClosed,
//     '3-home': processHome,
//     '3-home-wall1': processHomeWall,
//     '3-home-wall2': processHomeWall,
//     '3-toilet': processToiletItem,
//     '3-book1': processToiletItem,
//     '3-book2': processToiletItem,
//     '3-book3': processToiletItem,
//     '4-smog1': processSmog,
//     '4-smog2': processSmog,
//     '4-smog3': processSmog,
//     '4-dolphin': processDolphin,
//     '4-oil': addOilOverlap,
//     '4-cloud-small': processCloud,
//     '4-cloud-big': processCloud,
//     'c-corona': addCorona,
//     'c-mask': processMask,
//     '5-5G-stand': save5GStand,
//     '5-5G-box': process5GBox,
//     '5-tiktok-body': processTikTok
// }
// // Additional processing of sprites from tilemap
// const PROCESSING_NAME = {
//     'c-mask': processMask,
//     'c-corona': processCorona,
//     // Cart
//     '2-cart': updateCartBody,
//     // Collecting products
//     '2-banana': addToProductsGroup,
//     '2-bread': addToProductsGroup,
//     '2-bottle': addToProductsGroup,
//     '2-milk': addToProductsGroup,
//     '2-toilet': addToProductsGroup
// }
// const PROCESSING_TYPE = {
//     // Update people body
//     'person': addPersonBody,
//     'person-cart': addCartPersonBody
// }
// // Flipped sprite IDs
// const FLIP_IDS = [138, 148]

// // Pre processing of objects from tilemap
// const PRE_PROCESSING = {
//     '6-water': processFloodWater,
//     '7-smoke': processSmoke,
//     '7-firework1': processFirework,
//     '7-firework2': processFirework,
//     '7-firework3': processFirework,
//     'o-ray': processRay
// }
// // Post processing of sprites from tilemap
// const POST_PROCESSING = {
//     // Sprites in water
//     '6-car': processWaterCar,
//     '6-tree': processWaterTree,
//     // Save finish position
//     '6-finish': sprite => finish = sprite,
//     'c-corona': corona => processCorona(corona, false, false),
//     'c-mask': processMask,
//     '7-home': processHome,
//     '3-home-wall1': wall => wall.setDepth(Constants.DEPTH.important),
//     '3-home-wall2': wall => wall.setDepth(Constants.DEPTH.important),
//     '7-vaccine': processVaccine,
//     'o-ufo': processUfo,
//     'o-ray': processRay
// }
export class GamePlayScene extends Phaser.Scene {
    player: Boy
    map: Phaser.Tilemaps.Tilemap
    tileSet: Phaser.Tilemaps.Tileset
    backgroundLayer: Phaser.Tilemaps.TilemapLayer
    groundLayer: Phaser.Tilemaps.TilemapLayer
    midgroundLayer: Phaser.Tilemaps.TilemapLayer
    midgroundLayerCollider: Phaser.Physics.Arcade.Collider
    viruseLayer: Phaser.Tilemaps.ObjectLayer
    viruses: Phaser.Physics.Arcade.Group
    background: Phaser.GameObjects.TileSprite
    width: number
    height: number
    score: number
    virusesCollected: number
    groundGroup: Phaser.Physics.Arcade.StaticGroup
    constructor() {
        super('GamePlayScene')
    }

    create() {
        this.scene.run('GameUIScene')

        this.player = new Boy(
            this,
            1500,
            0,
            'boy',
            'idle',
            true
        )

        this.score = 0
        this.registry.set('score', this.score)
        this.virusesCollected = 0
        this.registry.set('viruses_collected', this.virusesCollected)

        //Layer
        this.initMapLayer()

        //camera later
        this.cameras.main.startFollow(this.player.spine, true)
        //this.cameras.main.setLerp(1,0)
        this.physics.world.setBoundsCollision(true, false, false, true)

        //collider
        this.initCollider()

    }

    initMapLayer() {
        this.width = this.game.config.width as number
        this.height = this.game.config.height as number

        // this.background = this.add
        //     .tileSprite(0, 0, 0, 0, 'texture', 'forest2.png')
        //     .setOrigin(0, 1)
        //     .setScale(0.001)


        // this.map = this.make.tilemap({
        //     key: 'E1M1'
        // })

        // this.map=this.add.tilemap('E1M1')

        // this.tilesSet = this.map.addTilesetImage('ground_tileset')

        this.viruses = this.physics.add.group({
            classType: Virus,
            immovable: true
        })

        // Create groud group
        this.groundGroup = this.physics.add.staticGroup()

        // Create tilemap
        this.map = this.add.tilemap('game')
        this.tileSet = this.map.addTilesetImage('tileset')

        var max = 7
        for (var i = 0; i <= max; i++) {
            this.map.getObjectLayer('level' + i.toString()).objects.forEach(image => {
                switch (image.name) {
                    case 'c-corona':
                        let virus = this.viruses.create(
                            image.x! + image.width! / 2,
                            image.y! - image.height! / 2,
                            image.name)

                        break
                    default:
                        this.addMapImage(image)
                        break
                }
            })
        }
        // Load sprites for outro
        this.map.getObjectLayer('outro').objects.forEach(object => {
            this.addMapImage(object)
        })



        // this.map.getObjectLayer('level0').objects.forEach(image => {
        //     this.addMapImage(image)
        // })
        // // Load map images for Level 1
        // this.map.getObjectLayer('level1').objects.forEach(object => {
        //     let sprite
        //     switch (object.type) {
        //         case 'fire':
        //             // Add fire objects
        //             sprite = addFire(object)
        //             break

        //         default:
        //             // Add image
        //             sprite = this.addMapImage(object)
        //             break
        //     }
        //     // Post processing
        //     if (object.name in PROCESSING) {
        //         PROCESSING[object.name](sprite)
        //     }
        //     // Save needed images
        //     if (FOREST_IMAGE_IDS.includes(object.id)) {
        //         FOREST_SPRITES[FOREST_IMAGE_IDS.indexOf(object.id)] = sprite
        //     }
        // })
        // // Load sprites for Level 2
        // this.map.getObjectLayer('level2').objects.forEach(object => {
        //     // Add sprite
        //     let sprite = this.addMapImage(object)
        //     // Post processing by name
        //     if (object.name in PROCESSING_NAME) {
        //         PROCESSING_NAME[object.name](sprite)
        //     }
        //     // Post processing by type
        //     if (object.type in PROCESSING_TYPE) {
        //         PROCESSING_TYPE[object.type](sprite)
        //     }
        //     // Set flip for the cart and person
        //     if (FLIP_IDS.includes(object.id)) {
        //         sprite.setFlip(true)
        //     }
        // })
        // // Load sprites for Level 3
        // this.map.getObjectLayer('level3').objects.forEach(object => {
        //     // Add sprite
        //     let sprite = this.addMapImage(object)
        //     // Post processing
        //     if (object.name in PROCESSING) {
        //         PROCESSING[object.name](sprite)
        //     }
        // })
        // // Load sprites for Level 4
        // this.map.getObjectLayer('level4').objects.forEach(object => {
        //     // Add sprite
        //     let sprite = this.addMapImage(object)
        //     // Post processing
        //     if (object.name in PROCESSING) {
        //         PROCESSING[object.name](sprite)
        //     }
        // })
        // // Load sprites for Level 5
        // this.map.getObjectLayer('level5').objects.forEach(object => {
        //     // Add sprite
        //     let sprite = this.addMapImage(object)
        //     // Post processing
        //     if (object.name in PROCESSING) {
        //         PROCESSING[object.name](sprite)
        //     }
        // })
        // // Load sprites for Level 6
        // this.map.getObjectLayer('level6').objects.forEach(object => {
        //     // Pre processing
        //     if (object.name in PRE_PROCESSING) {
        //         // Process
        //         PRE_PROCESSING[object.name](object)
        //     } else {
        //         // Add usual objects
        //         let sprite = this.addMapImage(object)
        //         // Post processing
        //         if (object.name in POST_PROCESSING) {
        //             POST_PROCESSING[object.name](sprite)
        //         }
        //     }
        // })
        // // Load sprites for Level 7
        // this.map.getObjectLayer('level7').objects.forEach(object => {
        //     if (object.name in PRE_PROCESSING) {
        //         PRE_PROCESSING[object.name](object)
        //     } else {
        //         // Add sprite
        //         let sprite = this.addMapImage(object)
        //         // Post processing
        //         if (object.name in POST_PROCESSING) {
        //             POST_PROCESSING[object.name](sprite)
        //         }
        //         // Check for home bush
        //         if (object.id == HOME_BUSH_ID) {
        //             sprite.setDepth(Constants.DEPTH.foregroundMain + 0.5)
        //         }
        //     }
        // })
        // // Load sprites for outro
        // this.map.getObjectLayer('outro').objects.forEach(object => {
        //     if (object.name in PRE_PROCESSING) {
        //         PRE_PROCESSING[object.name](object)
        //     } else {
        //         // Add sprite
        //         let sprite = this.addMapImage(object)
        //         // Post processing
        //         if (object.name in POST_PROCESSING) {
        //             POST_PROCESSING[object.name](sprite)
        //         }
        //     }
        // })





        //this.backgroundLayer = this.map.createLayer('background', this.tilesSet)

        // this.groundLayer = this.map.createLayer('ground', this.tileSet)
        // this.groundLayer.setCollisionByProperty({
        //     collide: true
        // })

        // Set foreground collision by property
        this.groundLayer = this.map.createLayer('foreground', this.tileSet)
        this.groundLayer.setCollisionByProperty({ collides: true })


        // this.midgroundLayer = this.map.createLayer('midground', this.tileSet)
        // this.midgroundLayer.setCollisionByProperty({
        //     collide: true
        // })


        // this.viruseLayer = this.map.getObjectLayer('viruses')
        // this.viruseLayer.objects.forEach(newVirus => {
        //     this.viruses.create(newVirus.x! + newVirus.width! / 2, newVirus.y! - newVirus.height! / 2, 'texture', 'corona.png')
        // })

    }

    addMapImage(image: any) {
        let newImage
        // Check if collision
        if (image.type === 'static') {
            // Create static image
            newImage = this.physics.add.staticImage(image.x, image.y, image.name)
            // Set origin and refresh body
            newImage.setOrigin(0, 1).refreshBody()
            // Add to the physics group
            this.groundGroup.add(newImage)
            // Set foreground main depth
            newImage.setDepth(0)
        } else {
            newImage = this.add.image(image.x, image.y, image.name)
            // Set origin
            newImage.setOrigin(0, 1)
            // Set depth: background or main secondary
            if (image.type === 'background') {
                newImage.setDepth(Constants.background.depth)
            } else {
                newImage.setDepth(-1)
            }
        }
        // Set name
        newImage.setName(image.id)
        // Result
        return newImage
    }

    initCollider() {
        //@ts-ignore
        this.physics.add.collider(this.player, this.groundLayer)
        //@ts-ignore
        this.physics.add.collider(this.player, this.groundGroup)
        this.physics.add.overlap(this.player.bullets, this.viruses, this.handleBulletVirusCollide, undefined, this)
        //@ts-ignore
        //this.midgroundLayerCollider = this.physics.add.collider(this.player.spine, this.midgroundLayer)
        //@ts-ignore
        this.physics.add.overlap(this.player, this.viruses, this.handlePlayerVirusCollide, undefined, this)
    }

    handleBulletVirusCollide(obj1: any, obj2: any) {
        let bullet = obj1 as Bullet
        let virus = obj2 as Virus
        this.virusesCollected += 1
        this.registry.set('viruses_collected', this.virusesCollected)
        gameEvents.emit('viruses_changed')

        bullet.disappear()
        virus.disappear()
    }

    handlePlayerVirusCollide(obj1: any, obj2: any) {
        let player = obj1 as Boy
        let virus = obj2 as Virus

        //player.infected()
        virus.disappear()
    }

    increaseScore(delta: number) {
        this.score += Constants.Score.scorePerSecond * delta / 1000
        this.registry.set('score', this.score)
        gameEvents.emit('score_changed')
    }

    update(time: number, delta: number) {
        //@ts-ignore
        if (this.player.body.onFloor()) {
            this.cameras.main.setLerp(1, 0)
        }
        //this.player.update()
        this.player.update(time, delta)
        //this.increaseScore(delta)

        //this.gameTime -= delta / 1000
        //gameEvents.emit('game_time_changed', this.gameTime)
        // this.goombas.getChildren().forEach(goomba=>{
        //     goomba.update()
        // })
    }
}