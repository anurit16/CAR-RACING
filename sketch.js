//var tower,towerImage;
/*var ghost,ghostImage;
var doorImage,climberImage;
var climberGroups;
var gameState=1;
var iBlockGroup;
var spookySound;
*/
var car ,lane1,lane2,lane3;
var block , blockImage;
var carImage , track , trackImage
var car_crashImage;
var PLAY = 1;
var END = 0;
var carRigth,carLeft;
var gameState = PLAY;
var score;
var siren, sirenImage , siren2 , siren2Image;
var fuel , fuelImage;
var line1 , line2 ;
var startCar,carSound;
function preload(){
 
carImage = loadImage("car1.png");
trackImage = loadImage("track.png");
blockImage = loadImage("block.png");
sirenImage = loadImage("siren.png");
siren2Image = loadImage("siren2.png");
car_crashImage = loadImage("car_crash.png");
fuelImage = loadImage("fuel.png")
carRight = loadImage("car2.png");
carLeft = loadImage("car3.png");
startCar = loadSound("carrace.mp3");
carSound = loadSound("racecar2.mp3");
}

function setup(){
  createCanvas(400,600);
  
   score = 500;
   
   track =createSprite(200,300);
   track.addImage(trackImage);
   track.scale = 1.1;
   //track.velocity = 0;
    
   car = createSprite(200,550);
   car.addImage(carImage);
   car.scale = 0.1;
  


   blockGroup = new Group();
   sirenGroup = new Group();
   siren2Group = new Group();
   fuelGroup = new Group();
   line1Group = new Group();
   lineGroup = new Group();
}



function draw(){
  background(0);
  
   
 if(gameState === PLAY){
  if(track.y>600){
    track.y = track.height/2;
  }
  track.velocityY = +10;
  
  if(keyDown("space")){
    track.velocityY = -(10 + score/50);
    carSound.play();
  }
  
  if(keyDown("up")){
    track.velocityY = track.velocityY+10;
    startCar.play();
  }
  if(keyDown("down")){
    track.velocityY = +5;
    
  }
  car.velocityx = 0;
  if(keyDown("right")){
    car.x = car.x+10;
    car.addImage(carRight);
    car.scale=0.15;
  
  }
  if(keyDown("left")){
    car.x = car.x-10;
    car.addImage(carLeft);
    car.scale=0.15;
  }
  
  fuel1();
  siren();
  siren2();
   lineee();
  linee();
  spawnObstacles();
  
  if (car.isTouching(fuelGroup)){
    score = score+50;
    fuelGroup.destroyEach();
    stroke("white");
  textSize(30);
  fill("black");
   text("+50",300,300);
  }

      if(car.isTouching(blockGroup) || score < 0){
        gameState = END;
        car.addImage(car_crashImage);
        text("GAME OVER",250,300); 
    
      }
     
     
        car.collide(lineGroup);
        car.collide(line1Group);
      
      
  drawSprites()
  
  stroke("white");
  textSize(20);
  fill("black");
   text("Fuel: "+ score,300,50);
   score = score-(track.velocityY>1); 
    
  }
  
  else if (gameState === END){
    text("GAME OVER",200,300); 
   // track.velocityY=0;
    track.velocityY = 0;
    car.addImage(car_crashImage);
  
  }
  
}
function spawnObstacles(){
  if (frameCount % 60 === 0) {
    var block = createSprite(90,50);
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: block.x = 90;
      break ;
   case 2: block.x = 220;
   break ;
   case 3: block.x = 320;
   break;
   default: break;
    } 
    block.addImage(blockImage);
    block.scale = 0.3;
    block.velocityY = track.velocityY;
    block.lifetime=200;
    blockGroup.add(block); 
    
  }

}
function siren(){
  if (frameCount % 10 === 0){
    var siren = createSprite(10,10);
    siren.addImage(sirenImage);
    siren.scale = 0.1;
    siren.velocityY = track.velocityY;
    siren.lifetime = 200;
    sirenGroup.add(siren);
  }
}
function siren2(){
  if (frameCount % 10 === 0){
    var siren2 = createSprite(390,10);
    siren2.addImage(siren2Image);
    siren2.scale = 0.1;
    siren2.velocityY = track.velocityY;
    siren2.lifetime = 200;
    siren2Group.add(siren2);
  }
}
function fuel1(){
  if (frameCount % 60 === 0) {
    var fuel = createSprite(50,200);
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: fuel.x = 90;
      break ;
   case 2: fuel.x = 220;
   break ;
   case 3: fuel.x = 320;
   break;
   default: break;
    } 
    fuel.addImage(fuelImage);
    fuel.scale = 0.1;
    fuel.velocityY = track.velocityY;
    fuel.lifetime=200;
    fuelGroup.add(fuel); 
    
  }
}
function lineee(){
  line = createSprite(25,300,5,600);
  line.visible= false;
  lineGroup.add(line);
}
function linee(){
  line1 = createSprite(380,300,5,600);
  line1.visible = false;
  line1Group.add(line1);
}