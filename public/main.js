var config = {
    type: Phaser.AUTO,
    parent: "root",
    width: 800,
    height: 500,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config)

function preload(){
    game.load.spritesheet("vguy", "https://iili.io/l48pta.png", { frameWidth: 512, frameHeight: 512 })
}

var vguy;

function create(){
    game.anims.create({
        key: "run",
        frameRate: 7,
        frames: game.anims.generateFrameNumbers("vguy", { start: 0, end: 11 }),
        repeat: -1
    })
    
    vguy = game.add.sprite(32, 384, "vguy")
    vguy.play("run")
}

function update(){
    
}
