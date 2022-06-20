class Ingame extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  //Creating Elements
  create() {
    //Background
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg");
    this.bg.setOrigin(0, 0);

    //Ship 1
    this.ship1 = this.add.sprite(
      config.width / 2 - 50,
      config.height / 2,
      "ship1"
    );

    //Ship 2
    this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");

    //Ship 3
    this.ship3 = this.add.sprite(
      config.width / 2 + 50,
      config.height / 2,
      "ship3"
    );

    //Creating ANIMATIONS
    //Ship 1 Animation
    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship1"),
      frameRate: 20,
      repeat: -1,
    });
    //Ship 2 Animations
    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1,
    });
    //Ship 3 Animations
    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1,
    });
    //Explosions Animations
    this.anims.create({
      key: "explosion_anim",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 1,
      hideOnComplete: true,
    });

    //Playing Animations
    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    //Making Ships clickable
    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    //Destroying Ships
    this.input.on("gameobjectdown", this.destroyShip, this);
    //Now playing dialogue
    this.add.text(20, 20, "Playing game", {
      font: "25px Arial",
      fill: "yellow",
    });
  }
  //Update per ms
  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
    this.bg.tilePositionY -= 0.5;
  }

  //Ship movement
  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height + 10) {
      this.resetPosition(ship);
    }
  }
  //Ship reset
  resetPosition(ship) {
    ship.y = -10;
    var randomX = Math.floor(Math.random() * config.width);
    ship.x = randomX;
  }
  //Explode the ship
  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explosion_anim");
  }
}
