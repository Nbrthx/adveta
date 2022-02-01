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
    this.load.spritesheet("vguy", "https://iili.io/l48pta.png", { frameWidth: 32, frameHeight: 32 })
}

var vguy;

function create(){
    this.anims.create({
        key: "idle",
        frameRate: 20,
        frames: this.anims.generateFrameNumbers("vguy", { start: 0, end: 10 }),
        repeat: -1
    })
    
    vguy = this.add.sprite(32, 384, "vguy")
    vguy.play("idle")
}

function update(){
    
}
