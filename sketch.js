
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  var survivalTime = 0;
   
  ground = createSprite(400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
background("skyblue");
  
  
  ground.velocityX = -7;
    ground.x = ground.width/2;
  
  
   if(keyDown("space")){
    monkey.velocityY= -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(World.frameCount%80===0){
    food();
  }
  
  if(World.frameCount%300===0){
    stones();
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
    


  
  drawSprites();
  fill("white")
  text("Score"+score,500,50);
  
  stroke("black")
  text(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,400,50);
}

function food(){
    banana = createSprite(600,200,20,20);
    banana.y= Math.round(random(120,220));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.setLifetime = 100;
    FoodGroup.add(banana);
  
}  

function stones(){
  obstacle = createSprite(600,325,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -3;
  
   obstacleGroup.add(obstacle);
}


