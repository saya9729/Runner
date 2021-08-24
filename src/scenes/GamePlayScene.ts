import { gameEvents } from "../event_handler/EventEmitter"
import { Boy } from "../objects/Boy"
import { Bullet } from "../objects/Bullet"
import { Constants } from "../objects/Constants"
import { Virus } from "../objects/Virus"
import { EventHandler } from "../objects/EventHandler"
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

const EventHandlerList = {
    // // Level 0
    // '0-load': Level0.preloadLevel,
    // '0-checkpoint0': Level0.checkpoint0,
    // '0-title': Level0.showTitle,
    // // Level 1
    // '1-load': Level1.preloadLevel,
    // '1-checkpoint1': Level1.checkpoint1,
    // '1-title': Level1.showTitle,
    // '1-checkpoint2': Level1.checkpoint2,
    // '1-wildfires': Level1.startWildfires,
    // '1-tree-falls': Level1.treeFalls,
    // '1-koala-jumps': Level1.koalaJumps,
    // '1-clear': Level1.clear,
    // // Level 2
    // '2-load': Level2.preloadLevel,
    // '2-checkpoint3': Level2.checkpoint3,
    // '2-bat': Level2.addFlyingBat,
    // '2-quarantine-ready': Level2.showQuarantineTitle,
    // '2-clear': Level2.clear,
    // // Level 3
    // '3-load': Level3.preloadLevel,
    // '3-checkpoint4': Level3.checkpoint4,
    // '3-title': Level3.showTitle,
    // '3-checkpoint5': Level3.checkpoint5,
    // '3-google': Level3.stockGoogle,
    // '3-amazon': Level3.stockAmazon,
    // '3-microsoft': Level3.stockMicrosoft,
    // '3-facebook': Level3.stockFacebook,
    // '3-apple': Level3.stockApple,
    // '3-checkpoint6': Level3.checkpoint6,
    // '3-quarantine': Level3.startQuarantine,
    // '3-resume-music': Level3.resumeMusic,
    // // Level 4
    // '4-load': Level4.preloadLevel,
    // '4-checkpoint7': Level4.checkpoint7,
    // '4-title': Level4.showTitle,
    // '4-smog': Level4.fadeOutSmog,
    // '4-dolphins': Level4.addDolphins,
    // '4-checkpoint8': Level4.checkpoint8,
    // '4-checkpoint9': Level4.checkpoint9,
    // '4-clear': Level4.clear,
    // // Level 5
    // '5-load': Level5.preloadLevel,
    // '5-checkpoint10': Level5.checkpoint10,
    // '5-checkpoint11': Level5.checkpoint11,
    // '5-5G-start': Level5.startCoronaGeneration,
    // '5-5G-stop': Level5.stopCoronaGeneration,
    // '5-checkpoint12': Level5.checkpoint12,
    // '5-clear': Level5.clear,
    // // Level 6
    // '6-load': Level6.preloadLevel,
    // '6-checkpoint13': Level6.checkpoint13,
    // '6-floods': Level6.floodsTitle,
    // '6-checkpoint14': Level6.checkpoint14,
    // '6-race': Level6.raceTitle,
    // '6-race1': () => Level6.startRace(),
    // '6-race2': () => Level6.bidenLeads(),
    // '6-race3': () => Level6.trumpLeads(),
    // '6-race4': () => Level6.bidenNitro(),
    // '6-clear': Level6.clear,
    // // Level 7
    // '7-load': Level7.preloadLevel,
    // '7-checkpoint15': Level7.checkpoint15,
    // '7-title': Level7.showTitle,
    // '7-attack-start': Level7.startCorona,
    // '7-attack-stop': Level7.removeCorona,
    // '7-reset': Level7.removeSyringe,
    // '7-game-win': Level7.gameWin,
    // '7-clear': Level7.clear,
    // // Outro
    // 'o-load': Outro.preloadLevel
    'o-load': EventHandler.gameOver
}
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
    timelineEvents: { x: number | undefined; name: string }[]
    currentEventIndex: number
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

        //this.score = 0
        //this.registry.set('score', this.score)
        this.virusesCollected = 0
        this.registry.set('viruses_collected', this.virusesCollected)

        //Layer
        this.initMapLayer()

        //camera later
        this.cameras.main.startFollow(this.player)
        //this.cameras.main.setLerp(1,0)
        //this.physics.world.setBoundsCollision()

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

        // Fill events from the map and sort by X position
        this.timelineEvents = this.map.getObjectLayer('events').objects.map(event => ({
            x: event.x,
            name: event.name
        })).sort((e1, e2) => e1.x! - e2.x!)

        this.currentEventIndex = 0

        // Update camera and world bounds
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

    }
    checkTimeline() {
        if (this.currentEventIndex >= this.timelineEvents.length) { return }

        if (this.timelineEvents[this.currentEventIndex].x! <= this.player.body.x) {
            let currentEvent = this.timelineEvents[this.currentEventIndex].name
            // Handle
            this.handleEvent(currentEvent)
            // Move to next event
            this.currentEventIndex++
        }
    }

    handleEvent(event: string) {
        if (event in EventHandlerList) {
            //@ts-ignore
            EventHandlerList[event]()
        } else {
            console.log(`${event} event handler not found`)
        }
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

        //@ts-ignore
        player.scene.player.infected()
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

        this.checkTimeline()

        //this.gameTime -= delta / 1000
        //gameEvents.emit('game_time_changed', this.gameTime)
        // this.goombas.getChildren().forEach(goomba=>{
        //     goomba.update()
        // })
    }
}