export const Constants = {
    Boy: {
        runSpeed: 500,
        jumpSpeed: 700,
        scale: 0.2,
        gravityY: 1000,
        //dropDownSpeed:200,
        depth:1,
        rateOfFire:2,
        //maxBullet:100,        
        gunOffset:{
            x:1,
            y:0.5
        },
        initialHealth:3
    },
    Bullet:{
        fadeTime:1500,
        bulletSpeed:999
    },
    Platform:{
        colliderDisableTime:200
    },
    Virus:{
        floatingDistance:40,
        floatingDuration:1000
    },
    Score:{
        scorePerSecond:10
    },
    UI:{
        virusFont:100,
        virusTextPositionX:100,
        virusTextPositionY:200,
        virusImagePositionX:70,
        virusImagePositionY:240,

        healthFont:100,
        healthTextPositionX:100,
        healthTextPositionY:100,
    },
    background:{
        paralax:0.5,
        depth:-2
    }
}