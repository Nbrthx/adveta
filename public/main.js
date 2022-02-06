var config = {
    type: Phaser.AUTO,
    parent: "root",
    width: 512,
    height: 288,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config)

function preload(){
    this.load.spritesheet("vguy", "https://iili.io/l48pta.png", { frameWidth: 32, frameHeight: 32 })
   
    this.load.image("vjoy_cap", "https://i.ibb.co/6R2knRs/base.png")
    this.load.image("vjoy_body", "https://i.ibb.co/KbJVTQ9/body.png")
    this.load.image("vjoy_base", "https://i.ibb.co/7RGGVmB/cap.png")
}

var vguy;

function create(){
    this.anims.create({
        key: "idle",
        frameRate: 20,
        frames: this.anims.generateFrameNumbers("vguy", { start: 0, end: 10 }),
        repeat: -1
    })
    
    vguy = this.add.sprite(20, 40, "vguy")
    vguy.play("idle")
}

function update(){
    
}
