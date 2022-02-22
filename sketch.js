var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImg
var roseImage
var rose

function preload() {
  
  backgroundImage = loadImage("BG Image 2.jpg");
  track = loadImage("Golden Track Img.jpg"); 
  car1_img = loadImage("Running Lion.gif");
  car2_img = loadImage("Running Man.gif");
  
  fuelImage = loadImage("fuel.png");
  powerCoinImage = loadImage("Red Rose Img.png");
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
  lifeImage = loadImage("life.png");
 blastImg = loadImage("blast.png");
roseImage = loadImage("Golden Rose Img.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
 if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
