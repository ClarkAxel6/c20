var fixedRect, movingRect;
var box1, box2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(700, 200, 20, 380);
  fixedRect.shapeColor = 'blue';
  
  movingRect = createSprite(200, 200, 100, 40);
  movingRect.shapeColor = 'blue';

  box1 = createSprite(200,100,20,20);
  box1.shapeColor = 'yellow';
  box1.velocityX = 2;

  box2 = createSprite(200,200,20,20);
  box2.shapeColor = 'purple';
  box2.velocityX = 2;

}

function draw() {
  background('black');  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }

  else{
    fixedRect.shapeColor = 'blue';
    movingRect.shapeColor = 'blue';
  }

  //detecting collision with box1 and wall
  if(box1.x - fixedRect.x <= box1.width/2 + fixedRect.width/2
    && fixedRect.x - box1.x <= box1.width/2 + fixedRect.width/2
    && box1.y - fixedRect.y <= box1.height/2 + fixedRect.height/2
    && fixedRect.y - box1.y <= box1.height/2 + fixedRect.height/2){
    box1.velocityX = 0;
  }

  if(box2.x - fixedRect.x <= box2.width/2 + fixedRect.width/2
    && fixedRect.x - box2.x <= box2.width/2 + fixedRect.width/2
    && box2.y - fixedRect.y <= box2.height/2 + fixedRect.height/2
    && fixedRect.y - box2.y <= box2.height/2 + fixedRect.height/2){
    box2.velocityX = box2.velocityX * (-1);
  }


  drawSprites();
}