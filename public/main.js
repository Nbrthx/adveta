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
    this.load.spritesheet("vjoy_cap", "https://zippyimage.com/images/2022/02/01/538467315cc4c0e6d727c06560d8a962.png")
    this.load.spritesheet(" vjoy_body", "https://zippyimage.com/images/2022/02/01/3968c8481e789d2de8030abb1758e4a7.png")
    this.load.spritesheet("vjoy_base", "https://zippyimage.com/images/2022/02/01/93e986475547e546ba04341fcb9c1708.png")
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

    this.vjoy = game.plugins.add(Phaser.Plugin.VJoy);
    this.vjoy.inputEnable(0, 0, 400, 600);
    this.vjoy.speed = {
      x:500,
      y:500
    }
}

function update(){
    var cursors = this.vjoy.cursors;
      if (cursors.left) {
        vguy.x--;
      } else if (cursors.right) {
        vguy.x++;
      }
      if (cursors.up) {
        vguy.y--;
      } else if (cursors.down) {
        vguy.y++;
      }
}
