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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image("tiles", "assets/tilesheet.png");
    this.load.tilemapTiledJSON("map", "assets/tilemap.json");    
}

function create ()
{

}

function update () {

}