
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 400)
  monkey = createSprite(80,315,20,20);  
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,350,1300,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  score = 0 ;
  FoodGroup = createGroup();
  obstacleGroup = createGroup(); 

  
}


function draw() {
 background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+ score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate())
  text("Survival :"+ SurvivalTime,100,50);
  
  if(ground.x < 0){
     ground.x = ground.width/2;
     }
  if (keyDown("space")&& monkey.y >= 310){
  monkey.velocityY = -14;
      }
  monkey.velocityY = monkey.velocityY+0.5;
  spawnfruits();
  spawnobstacle();  
  
  
  
  
  
  
  
  
  monkey.collide(ground);
  drawSprites();
  
}
function spawnfruits(){
  if(frameCount%80 === 0){
   banana = createSprite(615,Math.round(random(120,200)),20,20);
   banana.addImage("fruits",bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -4;
   banana.lifetime=160;
   FoodGroup.add(banana);
  } 
}

function spawnobstacle(){
  if(frameCount%300 === 0){
   obstacle = createSprite(615,330,20,20)
   obstacle.addImage("obstacle",obstaceImage)
   obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
    
    
    
     }
  
  
}






