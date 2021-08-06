import { gameEvents } from "../event_handler/EventHandler"
import { Boy } from "../objects/Boy"
import { Virus } from "../objects/Virus"
export class GamePlayScene extends Phaser.Scene {
    player: Boy
    map: Phaser.Tilemaps.Tilemap
    tilesSet: Phaser.Tilemaps.Tileset
    backgroundLayer: Phaser.Tilemaps.TilemapLayer
    groundLayer: Phaser.Tilemaps.TilemapLayer
    midgroundLayer: Phaser.Tilemaps.TilemapLayer
    midgroundLayerCollider: Phaser.Physics.Arcade.Collider
    viruseLayer: Phaser.Tilemaps.ObjectLayer
    viruses: Phaser.Physics.Arcade.Group
    background: Phaser.GameObjects.TileSprite
    width: string | number
    height: string | number
    constructor() {
        super('GamePlayScene')
    }

    create() {
        this.player = new Boy(
            this,
            1500,
            0,
            'boy',
            'idle',
            true
        )

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

        this.background = this.add
            .tileSprite(0, 0, 0, 0, 'texture', 'forest2.png')
            .setOrigin(0, 1)
            .setScale(2.5)


        this.map = this.make.tilemap({
            key: 'E1M1'
        })
        this.tilesSet = this.map.addTilesetImage('ground_tileset')

        //this.backgroundLayer = this.map.createLayer('background', this.tilesSet)

        this.groundLayer = this.map.createLayer('ground', this.tilesSet)
        this.groundLayer.setCollisionByProperty({
            collide: true
        })

        this.midgroundLayer = this.map.createLayer('midground', this.tilesSet)
        this.midgroundLayer.setCollisionByProperty({
            collide: true
        })

        this.viruses = this.physics.add.group({
            classType: Virus,
            immovable: true
        })
        this.viruseLayer = this.map.getObjectLayer('viruses')
        this.viruseLayer.objects.forEach(newVirus => {
            this.viruses.create(newVirus.x! + newVirus.width! / 2, newVirus.y! - newVirus.height! / 2, 'texture', 'corona.png')
        })

    }

    initCollider() {
        //@ts-ignore
        this.physics.add.collider(this.player.spine, this.groundLayer)
        //@ts-ignore
        this.midgroundLayerCollider = this.physics.add.collider(this.player.spine, this.midgroundLayer)
        //@ts-ignore
        this.physics.add.collider(this.player.spine, this.viruses,this.handlePlayerVirusCollide,undefined,this)
    }

    handlePlayerVirusCollide(obj1: any, obj2: any){
        let virus=obj2 as Virus
        virus.disappear()
    }



    update(time: number, delta: number) {
        //@ts-ignore
        if (this.player.body.onFloor()) {
            this.cameras.main.setLerp(1, 0)
        }
        //this.player.update()
        this.player.update(time, delta)
        //this.gameTime -= delta / 1000
        //gameEvents.emit('game_time_changed', this.gameTime)
        // this.goombas.getChildren().forEach(goomba=>{
        //     goomba.update()
        // })
    }
}