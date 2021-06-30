class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
      // load audio
      this.load.image('title','./assets/starfield.png');
      this.load.audio('sfx_background', './assets/background1.mp3');
      this.load.audio('sfx_select', './assets/start.wav');
      this.load.audio('sfx_explosion', './assets/explode.wav');
      this.load.audio('sfx_rocket', './assets/fireup.mp3');
  }

    create() {
      this.title = this.add.tileSprite(0, 0, 640, 480, 'title').setOrigin(0, 0);
      this.sound.play('sfx_background');
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Brush Script MT',
            fontSize: '60px',
            color: '#808080',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let instructionConfig = {
          fontFamily: 'Verdana',
          fontSize: '20px',
          backgroundColor: '#808080',
          color: '#843605',
          align: 'center',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2-120 - borderUISize - borderPadding, 'Hero Shooting', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, '← = Novice mode | → = Expert mode | ↑ = two players mode', instructionConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 +100, 'P1: Use ←↑→ arrows to move & (F) to fire', instructionConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 +100 + borderUISize + borderPadding, 'P2: Use WAD arrows to move & (S) to fire', instructionConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
          // Two players mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000,
            mode:true,
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}
