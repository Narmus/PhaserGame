class Startscreen extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("bg", "assets/background.png");
    this.load.spritesheet("ship1", "assets/spritesheets/ship1.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");
  }
}
