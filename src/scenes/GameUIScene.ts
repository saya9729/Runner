import { gameEvents } from "../event_handler/EventHandler"
import { Constants } from "../objects/Constants"
export class GameUIScene extends Phaser.Scene{
    viruses: Phaser.GameObjects.Text
    score: Phaser.GameObjects.Text
    constructor(){
        super('GameUIScene')
    }

    create(){
        this.viruses=this.add.text(100,200,'0')
        //this.score=this.add.text(100,100,'0')
        this.viruses.setFontSize(Constants.UI.virusFont)
        //this.score.setFontSize(Constants.UI.scoreFont)

        gameEvents.on('viruses_changed', () => {            
			this.viruses.text = this.registry.values.viruses_collected.toLocaleString()
		})
        // gameEvents.on('score_changed', () => {
		// 	this.score.text = Math.round(this.registry.values.score).toLocaleString()
		// })

        this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			gameEvents.off('viruses_changed')
            //gameEvents.off('score_changed')
		})
    }
    
}