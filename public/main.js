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
   
    this.load.plugin("rexvirtualjoystickplugin")
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
    
    this.joyStick = this.plugins.get("rexvirtualjoystickplugin").add(this, {
                x: 400,
                y: 300,
                radius: 100,
                base: this.add.circle(0, 0, 100, 0x888888),
                thumb: this.add.circle(0, 0, 50, 0xcccccc),
                // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
                // forceMin: 16,
                // enable: true
            })
            .on('update', this.dumpJoyStickState, this);

        this.text = this.add.text(0, 0);
        this.dumpJoyStickState();
    }
}

function update(){
    
}
