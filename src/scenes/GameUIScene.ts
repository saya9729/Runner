import { gameEvents } from "../event_handler/EventEmitter"
import { Constants } from "../objects/Constants"
export class GameUIScene extends Phaser.Scene{
    viruses: Phaser.GameObjects.Text
    health: Phaser.GameObjects.Text
    constructor(){
        super('GameUIScene')
    }

    create(){
        this.viruses=this.add.text(100,200,'0')
        this.health=this.add.text(100,100,Constants.Boy.initialHealth.toLocaleString())
        this.viruses.setFontSize(Constants.UI.virusFont)
        this.health.setFontSize(Constants.UI.healthFont)

        gameEvents.on('viruses_changed', () => {            
			this.viruses.text = this.registry.values.viruses_collected.toLocaleString()
		})
        gameEvents.on('health_changed', () => {
			this.health.text = this.registry.values.health.toLocaleString()
		})

        this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			gameEvents.off('viruses_changed')
            gameEvents.off('health_changed')
		})
    }
    
}