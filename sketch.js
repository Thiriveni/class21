var fixedRect,movingRect;
var sprite1,sprite2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);

  sprite1=createSprite(100,300,50,60);
  sprite2=createSprite(400,100,60,50);

  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";

  sprite1.shapeColor="blue";
  sprite2.shapeColor="blue";

  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.velocityX=-3;
  movingRect.velocityX=3;

}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

//bounceOff(movingRect,fixedRect);

if(isTouching(movingRect,sprite1)){
  movingRect.shapeColor="purple";
  sprite1.shapeColor="purple";
}
else{
  movingRect.shapeColor="green";
  sprite1.shapeColor="green";
}

  


  drawSprites();
}

