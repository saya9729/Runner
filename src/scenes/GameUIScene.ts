import { gameEvents } from "../event_handler/EventEmitter"
import { Constants } from "../objects/Constants"
export class GameUIScene extends Phaser.Scene {
    virusText: Phaser.GameObjects.Text
    health: Phaser.GameObjects.Text
    virusImage: Phaser.GameObjects.Image
    constructor() {
        super('GameUIScene')
    }

    create() {
        this.initHealth()
        this.initVirus()


        this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
            gameEvents.off('viruses_changed')
            gameEvents.off('health_changed')
        })
    }

    initHealth() {
        this.health = this.add.text(Constants.UI.healthTextPositionX, Constants.UI.healthTextPositionY, Constants.Boy.initialHealth.toLocaleString())
        this.health.setFontSize(Constants.UI.healthFont)
        
        gameEvents.on('health_changed', () => {
            this.health.text = this.registry.values.health.toLocaleString()
        })
    }

    initVirus() {
        this.virusText = this.add.text(Constants.UI.virusTextPositionX, Constants.UI.virusTextPositionY, '0')
        this.virusText.setFontSize(Constants.UI.virusFont)
        this.virusImage=this.add.image(Constants.UI.virusImagePositionX,Constants.UI.virusImagePositionY,'c-corona')

        gameEvents.on('viruses_changed', () => {
            this.virusText.text = this.registry.values.viruses_collected.toLocaleString()
        })
    }

}