var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let boxLayer;
let monsterLayer;
let playerLayer;
let boxes;
let player;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image("tiles", "assets/tilesheet.png");
    this.load.image("cardBox", "assets/cardBox.png");
    this.load.image("flame", "assets/flame.png");
    this.load.image("player", "assets/player.png");
    this.load.tilemapTiledJSON("map", "assets/tutorial.json");    
}

function create ()
{
    //create map
    const map = this.make.tilemap({key: "map"});
    const tileset = map.addTilesetImage("52571", "tiles");

    //add layers
    const BackgroundLayer = map.createStaticLayer("BackgroundLayer", "tileset", 0, 0);
    const WallsLayer = map.createStaticLayer("WallsLayer", tileset, 0, 0);
    playerLayer = map.getObjectLayer('playerLayer')['objects'];
    monsterLayer = map.getObjectLayer('monsterLayer')['objects'];
    boxLayer = map.getObjectLayer('boxLayer')['objects'];
    
    //boxes
    boxes = this.physics.add.staticGroup();
    boxLayer.forEach(object => {
        let obj = boxes.create(object.x, object.y, "cardBox");
        obj.setScale(object.width/16, object.height/16);
        obj.setOrgin(0);
        obj.body.width = object.width;
        obj.body.height = object.height;

    });

    //player
    player = game.add.sprite(100, 100, 'player');

    //collisions
    map.setCollisionBetween(0, 923, true, 'groundayer');
    player.setColideWorldBounds(true);
    player.add.collider(player, WallsLayer);

    //controlls
    game.input.keyboard.addKeyCapture([
        Phaser.Keyboard.LEFT,
        Phaser.Keyboard.RIGHT,
        Phaser.Keyboard.UP,
        Phaser.Keyboard.DOWN,
    ])
}

function update () 
{
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {

    }
    if (game.input.keyboard.isDown(Phaser.Kyeboard.DOWN)) {

    }
}