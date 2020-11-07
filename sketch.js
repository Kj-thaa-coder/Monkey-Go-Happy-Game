var monkey , monkey_running
var banana ,bananaImage, obstacle, ground, groundImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var collideTop,  collideBottom
var survivalTime=0
var PLAY = 1
var END = 0
var gameState = PLAY

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png")
 groundImage = loadImage("41A1AE70-B27B-453C-8E8C-4FE23FD8DC49.png")
 
}



function setup() {
  createCanvas(600,420)
  
  
  monkey = createSprite(100,350,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.17
  
  
  
  ground = createSprite(300,210)
  ground.addImage("ground", groundImage)
  ground.velocityX = -17
  
  obstacle = createSprite(700,350)
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.velocityX = -13
  obstacle.scale = 0.23
  
  banana = createSprite(random(680,720),120)
  banana.addImage("banana",bananaImage)
  banana.velocityX = -10
  banana.scale = 0.12
  
  collideTop = createSprite(300,20,600,70)
  
  collideBottom = createSprite(300,420,600,70)
  

  
}


function draw() {
   survivalTime = survivalTime +1
 
  monkey.collide(collideTop)
  monkey.collide(collideBottom)
  banana.collide(collideBottom)
  
  monkey.setCollider("circle",0,0,240)
  
  obstacle.setCollider("circle",0,0,200)
  
  collideBottom.visible = false
  collideTop.visible = false
   
  if(keyDown("space") && monkey.y>= 332.81) { 
    monkey.velocityY = -9
  }
  

if (monkey.y <= 95.80000000000001||monkey.y<=95.80000000000003){
   monkey.velocityY = 7
 }
  
  if(monkey.isTouching(obstacle)){
    gameState = END
    ground.velocityX = 0
    obstacle.velocityX = 0
    survivalTime = survivalTime -1
    banana.velocityX = 0
    banana.velocityY = 10
    if(keyDown("space")){
    monkey.velocityY = 0

    }
  }
  
    
  if(monkey.isTouching(banana)){
   banana.visible = false
    }
   
  
  if(ground.x < 70){
     ground.x = 450
   }
  
  
  if(obstacle.x < -3){
    obstacle.x = 740
  }
  
    
  if(banana.x < -3){
    banana.x = 740
    banana.visible = true
  }
  
  
  
  monkey.depth = ground.depth +1
  drawSprites();
  
    fill("white")
 textSize(30)
  text("Survival Time: "+survivalTime,330,120)

  
}





