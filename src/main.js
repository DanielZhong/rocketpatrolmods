let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW, keyS;


//points breakdown:

//Complete tutorial free point: 20
//1. Background music: 5
//2. Free control after fire: 5 (can use left, right arrow to move after fire, and also created UP arrow to accelerate rocket)
//3. Create a new spaceship type that's smaller, moves faster, and worth more point: 20
//4. sitmulataneous two-player mode: 30 (in the menu, press UP arrow to start two player modes, the second player can use WAD key to move and S key to fire)
//5. Create a new title screen: 10
//6. succesfuly hit times: 20
//7. Redesign theme, title screen, artwork(Spackeship and rockets), border, and all sound effects: 60
//In two players mode, google chrome is lag when rocket hits multiply spaceship in short time
// total: should be more than 100

//cite:
//https://www.soundsnap.com - downloaded few sound effects and remodified them
//google pictures - downloaded copyright free pictures and remodified them
