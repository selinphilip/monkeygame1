var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  // creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
 FoodGroup = createGroup();
 obstacleGroup = createGroup();
  
}


function draw() {
 background(600);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
   var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  obstacleGroup.collide(monkey);
  
  Food();
  Obstacle();
  
  drawSprites();
}

function Food(){
  if(frameCount % 80 === 0){
     banana = createSprite(375,400,10,10);
     banana.addImage(bananaImage);
     banana.y = Math.round(random(123,200));
     banana.velocityX = -6;
     banana.scale = 0.1;
     banana.lifetime = 100;
    
  
    
    banana.depth = monkey.depth;
    
    monkey.depth = monkey.depth + 1;
    
     FoodGroup.add(banana);
    
  }
}


function Obstacle(){
   if(frameCount%300 === 0){
     obstacle = createSprite(374,314,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.2;
     obstacle.velocityX = -3;
     obstacle.lifetime = 200;
     
     obstacleGroup.add(obstacle);
   }
}

  






