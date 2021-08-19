export class PreloadScene extends Phaser.Scene {
    preload() {
        this.load
            .image('ground_tileset', 'assets/tileset/ground_tileset.png')
            .tilemapTiledJSON('E1M1', 'assets/map/E1M1.json')
            .image('tileset', 'assets/tileset/tileset.png')
            .tilemapTiledJSON('game', 'assets/map/tilemap.json')
            .atlas('texture', 'assets/texture/texture_bundle.png', 'assets/texture/texture_bundle.json')
            .spine('boy', 'assets/spine/spineboy-pro.json', 'assets/spine/spineboy-pro.atlas', true)

            .image('c-hills1', '/assets/image/common/hills1.png')
            .image('c-hills2', '/assets/image/common/hills2.png')
            .image('c-hills3', '/assets/image/common/hills3.png')
            .image('c-cloud1', '/assets/image/common/cloud1.png')
            .image('c-cloud2', '/assets/image/common/cloud2.png')
            .image('c-cloud3', '/assets/image/common/cloud3.png')
            .image('c-clouds1', '/assets/image/common/clouds1.png')
            .image('c-clouds2', '/assets/image/common/clouds2.png')
            .image('c-clouds3', '/assets/image/common/clouds3.png')
            .image('c-city', '/assets/image/common/city.png')
            .image('c-stone1', '/assets/image/common/stone1.png')
            .image('c-stone2', '/assets/image/common/stone2.png')
            .image('c-bush', '/assets/image/common/bush.png')
            .image('c-tree1', '/assets/image/common/tree1.png')
            .image('c-tree2', '/assets/image/common/tree2.png')
            .image('c-tree3', '/assets/image/common/tree3.png')
            .image('c-mask', '/assets/image/common/mask.png')
            .image('c-corona', '/assets/image/common/corona.png')



            .image('play', '/assets/image/buttons/play.png')

            .image('info', '/assets/image/buttons/info.png')
            // Tutorial controls
            .image('arrow-left', '/assets/image/tutorial/3-left.png')
            .image('arrow-right', '/assets/image/tutorial/3-right.png')
            .image('arrow-up', '/assets/image/tutorial/3-up.png')
            .image('arrow-down', '/assets/image/tutorial/3-down.png')



            .spritesheet('0-bird', '/assets/image/level0/bird.png', {
                frameWidth: 64, frameHeight: 64, margin: 1, spacing: 2
            })



            .image('1-rock', '/assets/image/level1/rock.png')
            .image('1-tree1', '/assets/image/level1/tree1.png')
            .image('1-tree2', '/assets/image/level1/tree2.png')
            .image('1-grass', '/assets/image/level1/grass.png')
            .image('1-stone1', '/assets/image/level1/stone1.png')
            .image('1-stone2', '/assets/image/level1/stone2.png')
            .image('1-stone3', '/assets/image/level1/stone3.png')
            .image('1-stone4', '/assets/image/level1/stone4.png')
            .image('1-forest1', '/assets/image/level1/forest1.png')
            .image('1-forest2', '/assets/image/level1/forest2.png')
            .image('1-forest3', '/assets/image/level1/forest3.png')
            .image('1-forest4', '/assets/image/level1/forest4.png')
            .image('1-forest-fire1', '/assets/image/level1/forest-fire1.png')
            .image('1-forest-fire2', '/assets/image/level1/forest-fire2.png')
            .image('1-tree3', '/assets/image/level1/tree3.png')
            .image('1-tree-cut1', '/assets/image/level1/tree-cut1.png')
            .image('1-tree-cut2', '/assets/image/level1/tree-cut2.png')
            .image('1-tree-cut3', '/assets/image/level1/tree-cut3.png')
            .image('1-tree-cut3-leaves', '/assets/image/level1/tree-cut3-leaves.png')
            .image('1-koala', '/assets/image/level1/koala.png')
            .image('1-bush1', '/assets/image/level1/bush1.png')
            .image('1-bush2', '/assets/image/level1/bush2.png')
            // Fire sprites
            .spritesheet('1-fire1', '/assets/image/level1/fire1.png', {
                frameWidth: 64, frameHeight: 92, margin: 1, spacing: 2
            })
            .spritesheet('1-fire2', '/assets/image/level1/fire2.png', {
                frameWidth: 104, frameHeight: 96, margin: 1, spacing: 2
            })
            .spritesheet('1-fire3', '/assets/image/level1/fire3.png', {
                frameWidth: 124, frameHeight: 160, margin: 1, spacing: 2
            })



            // Outdoor
            .image('2-sign1', '/assets/image/level2/sign1.png')
            .image('2-sign2', '/assets/image/level2/sign2.png')
            .image('2-cart', '/assets/image/level2/cart.png')
            .image('2-city', '/assets/image/level2/city.png')
            .image('2-column', '/assets/image/level2/column.png')
            // People
            .image('2-person2', '/assets/image/level2/people/2.png')
            .image('2-person3', '/assets/image/level2/people/3.png')
            .image('2-person4', '/assets/image/level2/people/4.png')
            .image('2-person5', '/assets/image/level2/people/5.png')
            .image('2-person7', '/assets/image/level2/people/7.png')
            .image('2-person8', '/assets/image/level2/people/8.png')
            .image('2-person9', '/assets/image/level2/people/9.png')
            .image('2-person10', '/assets/image/level2/people/10.png')
            .image('2-person11', '/assets/image/level2/people/11.png')
            .image('2-person12', '/assets/image/level2/people/12.png')
            // Market
            .image('2-market', '/assets/image/level2/market/building.png')
            .image('2-rack1', '/assets/image/level2/market/rack1.png')
            .image('2-rack2', '/assets/image/level2/market/rack2.png')
            .image('2-rack3', '/assets/image/level2/market/rack3.png')
            .image('2-cashier', '/assets/image/level2/market/cashier.png')

            // Products
            .image('2-banana', '/assets/image/level2/products/banana.png')
            .image('2-bread', '/assets/image/level2/products/bread.png')
            .image('2-bottle', '/assets/image/level2/products/bottle.png')
            .image('2-milk', '/assets/image/level2/products/milk.png')
            .image('2-toilet', '/assets/image/level2/products/toilet.png')
            // Bat sprite
            .spritesheet('2-bat', '/assets/image/level2/bat.png', {
                frameWidth: 64, frameHeight: 72, margin: 1, spacing: 2
            })



            // Buildings
            .image('3-gym', '/assets/image/level3/gym.png')
            .image('3-restaurant', '/assets/image/level3/restaurant.png')
            .image('3-cinema', '/assets/image/level3/cinema.png')
            .image('3-closed', '/assets/image/level3/closed.png')
            // Stock
            .image('3-stock-apple', '/assets/image/level3/stock/ap.png')
            .image('3-stock-facebook', '/assets/image/level3/stock/f.png')
            .image('3-stock-amazon', '/assets/image/level3/stock/am.png')
            .image('3-stock-google', '/assets/image/level3/stock/g.png')
            .image('3-stock-microsoft', '/assets/image/level3/stock/m.png')
            // Home
            .image('3-home', '/assets/image/level3/home.png')
            .image('3-home-wall1', '/assets/image/level3/home-wall1.png')
            .image('3-home-wall2', '/assets/image/level3/home-wall2.png')
            .image('3-toilet', '/assets/image/level3/toilet.png')
            .image('3-book1', '/assets/image/level3/book1.png')
            .image('3-book2', '/assets/image/level3/book2.png')
            .image('3-book3', '/assets/image/level3/book3.png')
            // Stock sprites
            .spritesheet('3-stock-fire', '/assets/image/level3/stock/fire.png', {
                frameWidth: 188, frameHeight: 112, margin: 1, spacing: 2
            })
            .spritesheet('3-stock-sparks', '/assets/image/level3/stock/sparks.png', {
                frameWidth: 420, frameHeight: 96, margin: 1, spacing: 2
            })


            // Mountains, smog and dolphin
            .image('4-mountain1', '/assets/image/level4/mountain1.png')
            .image('4-mountain2', '/assets/image/level4/mountain2.png')
            .image('4-mountain3', '/assets/image/level4/mountain3.png')
            .image('4-smog1', '/assets/image/level4/smog1.png')
            .image('4-smog2', '/assets/image/level4/smog2.png')
            .image('4-smog3', '/assets/image/level4/smog3.png')
            .image('4-dolphin', '/assets/image/level4/dolphin.png')
            // Oil
            .image('4-oil', '/assets/image/level4/oil.png')
            // Zoom cloud
            .image('4-cloud-small', '/assets/image/level4/cloud-small.png')
            .image('4-cloud-big', '/assets/image/level4/cloud-big.png')



            // BLM
            .image('5-BLM', '/assets/image/level5/BLM.png')
            .image('5-flower1', '/assets/image/level5/flower1.png')
            .image('5-flower2', '/assets/image/level5/flower2.png')
            .image('5-flower3', '/assets/image/level5/flower3.png')
            .image('5-flower4', '/assets/image/level5/flower4.png')
            // 5G
            .image('5-5G-stand', '/assets/image/level5/5G-stand.png')
            .image('5-5G-box', '/assets/image/level5/5G-box.png')
            .image('5-5G-stand-broken', '/assets/image/level5/5G-stand-broken.png')
            .image('5-5G-box-broken', '/assets/image/level5/5G-box-broken.png')
            // Preload
            .image('5-tiktok-body', '/assets/image/level5/tiktok-body.png')
            .image('5-tiktok-logo', '/assets/image/level5/tiktok-logo.png')



            // Flood
            .image('6-car', '/assets/image/level6/car.png')
            .image('6-tree', '/assets/image/level6/tree.png')
            .image('6-house1', '/assets/image/level6/house1.png')
            .image('6-house2', '/assets/image/level6/house2.png')
            // Water
            .spritesheet('6-water', '/assets/image/level6/water.png', {
                frameWidth: 64, frameHeight: 64, margin: 1, spacing: 2
            })
            // USA president election
            .image('6-statue', '/assets/image/level6/statue.png')
            .image('6-whitehouse', '/assets/image/level6/whitehouse.png')
            .image('6-finish', '/assets/image/level6/finish.png')
            // President sprites
            // Run
            .spritesheet('6-trump-run', '/assets/image/level6/trump/run.png', {
                frameWidth: 104, frameHeight: 144, margin: 1, spacing: 2
            })
            .spritesheet('6-biden-run', '/assets/image/level6/biden/run.png', {
                frameWidth: 104, frameHeight: 144, margin: 1, spacing: 2
            })
            // Idle
            .spritesheet('6-trump-idle', '/assets/image/level6/trump/idle.png', {
                frameWidth: 116, frameHeight: 132, margin: 1, spacing: 2
            })
            .spritesheet('6-biden-idle', '/assets/image/level6/biden/idle.png', {
                frameWidth: 96, frameHeight: 140, margin: 1, spacing: 2
            })
            // Sad and happy
            .spritesheet('6-trump-sad', '/assets/image/level6/trump/sad.png', {
                frameWidth: 84, frameHeight: 136, margin: 1, spacing: 2
            })
            .spritesheet('6-biden-happy', '/assets/image/level6/biden/happy.png', {
                frameWidth: 96, frameHeight: 144, margin: 1, spacing: 2
            })



            // Vaccine
            .image('7-vaccine', '/assets/image/level7/vaccine.png')
            .image('7-syringe', '/assets/image/level7/syringe.png')
            // Home
            .image('7-home', '/assets/image/level7/home.png')
            .image('7-bush', '/assets/image/level7/bush.png')
            .image('7-tree1', '/assets/image/level7/tree1.png')
            .image('7-tree2', '/assets/image/level7/tree2.png')
            // Fireworks and smoke
            .spritesheet('7-smoke', '/assets/image/level7/smoke.png', {
                frameWidth: 308, frameHeight: 216, margin: 1, spacing: 2
            })
            .spritesheet('7-firework1', '/assets/image/level7/firework1.png', {
                frameWidth: 440, frameHeight: 392, margin: 1, spacing: 2
            })
            .spritesheet('7-firework2', '/assets/image/level7/firework2.png', {
                frameWidth: 440, frameHeight: 392, margin: 1, spacing: 2
            })
            .spritesheet('7-firework3', '/assets/image/level7/firework3.png', {
                frameWidth: 440, frameHeight: 396, margin: 1, spacing: 2
            })



            // Outro
            .image('o-speech-bubble', '/assets/image/outro/speech-bubble.png')
            .image('o-clouds', '/assets/image/outro/clouds.png')
            .image('o-city', '/assets/image/outro/city.png')
            .image('o-ufo', '/assets/image/outro/ufo.png')
            .image('o-godzilla', '/assets/image/outro/godzilla.png')
            .image('o-zombie1', '/assets/image/outro/zombie1.png')
            .image('o-zombie2', '/assets/image/outro/zombie2.png')
            .image('o-zombie3', '/assets/image/outro/zombie3.png')
            .image('o-zombie4', '/assets/image/outro/zombie4.png')
            .image('o-zombie5', '/assets/image/outro/zombie5.png')
            // Godzilla ray sprite
            .spritesheet('o-ray', '/assets/image/outro/ray.png', {
                frameWidth: 376, frameHeight: 340, margin: 1, spacing: 2
            })

    }
    create() {
        this.scene.start('GamePlayScene')
    }
}