const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var bgImage;
var boy;
var boyImage;
var snowflakes = []
var maxDrops = 100

function preload(){
  bgImage = loadImage("snow1.jpg");
  boyImage = loadImage("boyImage.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  boy = createSprite(400,200,50,50);
  boy.addImage(boyImage);
  boy.scale = 0.7
  if(frameCount%80===0){
    for(var i = 0;i<=maxDrops;i++){
      snowflakes.push(new createsnowflake(random(0,800),random(0,800)))
    }
  }
}

function draw() {
  background(bgImage); 
  Engine.update(engine) 
  for(var i =0;i<=maxDrops;i++){
    snowflakes[i].createSnow()
    snowflakes[i].updateY()
  }
  drawSprites();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
  boy.velocityX = -5;
}
  if (keyCode === RIGHT_ARROW){
  boy.velocityX = 5;
}
  
}
