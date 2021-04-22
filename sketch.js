var fixedRect, movingRect;
var man, girl, boy, mom; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  man = createSprite(200,100,50,50);
  man.shapeColor = "pink";
  
  girl = createSprite(300,100,50,50);
  girl.shapeColor = "yellow";

  boy = createSprite(400,100,50,50);
  boy.shapeColor = "leon";

  mom = createSprite(500,100,50,50);
  mom.shapeColor = "lime";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 movingRect.velocityX = -8;
 fixedRect.velocityX = 8;
 
 bounceOff(movingRect,fixedRect);

  if(isTouching(girl,movingRect,man,boy)){

    girl.shapeColor = "red";
    movingRect.shapeColor = "red";
    man.shapeColor = "blue";
    boy.shapeColor = "blue";
  }
  else{
    girl.shapeColor = "green";
    movingRect.shapeColor = "green";
    man.shapeColor = "pink";
    boy.shapeColor = "neon";
  }
  drawSprites();
}

