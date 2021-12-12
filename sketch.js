
var bg, bgImage;
// var coin, coinImage;
// var cloud,cloud2, cloudImage;
// var cloudGroup, coinGroup, fuelGroup;
// var coinImage;
// var fuelImage;
// var life, life2, life3, lifeImage;
// var gameover, gameoverImage;
var  spaceshipImage, spaceship;
// var score;
// var gamestate = "play";


function preload() {
  // bgImage = loadImage("bg.png");
  // coinImage = loadImage("coin.png");
  // cloudImage = loadImage("cloud.png");
  // fuelImage = loadImage("fuel-min.png");
  // gameoverImage = loadImage("gameover.png");
  // lifeImage = loadImage("life.png");
  spaceshipImage = loadAnimation("spaceship1.png", "spaceship2.png", "spaceship3.png", "spaceship4.png", "spaceship5.png", "spaceship6.png");

}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

  spaceship = createSprite(100,200,100,100);
  spaceship.addAnimation("running",spaceshipImage);
  spaceship.scale = 0.4;

  // life = createSprite(windowHeight,windowWidth/2 - 600,50,50);
  // life.addImage(lifeImage);
  // life.scale = 0.2;
  
  // life2 = createSprite(windowHeight + 100,windowWidth/2 - 600,50,50);
  // life2.addImage(lifeImage);
  // life2.scale = 0.2;

  // life3 = createSprite(windowHeight + 200,windowWidth/2 - 600,50,50);
  // life3.addImage(lifeImage);
  // life3.scale = 0.2;


  //bg = createSprite(windowWidth/2,windowHeight/2,windowWidth, windowHeight);
  //bg.addImage(bgImage);
  

  // gameover = createSprite(200,200);
  // gameover.addImage(gameoverImage);

  

  // cloudGroup = new Group();
  // coinGroup = new Group();
  // fuelGroup = new Group();

  // score = 0;
}

function draw() {
 
  background(180);
   
    
      if (keyDown("space")) {
        spaceship.velocityX = 10;
        console.log("It is in this if condition");
      }
    // } 
    
  //bg.velocityX = 5;
  //if (bg.x < 0) {
    //bg.x = bg.width/2;
  //}
 
  //bg.scale = 2;
  //bg.depth = 1;
  //spaceship.depth = bg.depth + 1;
  //life.depth = bg.depth+1;
  //life2.depth = bg.depth+1;
  //life3.depth = bg.depth+1;
drawSprites();
  }

// function obstacles() {
//   if (frameCount % 60 === 0) {
//     cloud = new Cloud(random(100,400), random(100,400), 50,50);
//     cloud2 = new Cloud(random(100,400), random(100,400), 50,50);
//     cloudGroup.add(cloud);
//     cloudGroup.add(cloud2);

//   }
//   if (frameCount % 40 === 0) {
//     coin = new Coin(random(100,400), random(100,400), 50,50);
//     coinGroup.add(coin);
//   }




  


